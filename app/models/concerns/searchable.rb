  module Searchable
  extend ActiveSupport::Concern

  module ClassMethods

    # params -- The search parameters as a structured hash (typically JSON)
    # storage -- The hash in which to save the parsed search criteria
    #
    def parse_search(params, storage = {})
      joins(params['criteria'].keys.map(&:to_sym))
          .where(parse_query(storage, params['old'], nil, name.downcase.pluralize, params['criteria']))
          .order(self.search_order)
          .limit(params['limit'])
          .offset((params['page'] - 1)*params['limit'])
          .distinct
    end

    def get_subquery(storage, old, table_name, table_fields)
      parse_subquery(storage, old, table_name, table_fields)
    end

    def get_query(storage, old, table, key, values)
      parse_query(storage, old, table, key, values)
    end

    private

    def parse_query(storage, old, table, key, values)
      if (values.is_a?(Hash))
        storage[key] = Hash.new
        values.map { |k, v| "(#{parse_query(storage[key], old ? old[key] : nil, key, k, v)})" }.join(" AND ")
      else
        storage[key] = values.scan(/(?:[^\s"]+|"[^"]*")+/)
        if old
          storage[key].concat(old)
          storage[key].uniq!
        end
        storage[key].map { |value|
            parse_subquery(table, key, value)
        }.join(to_delim(key))
      end
    end

    def parse_subquery(table, key, value)
      if ['-', '+'].include?(key[0])
        "#{'NOT ' if key[0] == '-'}EXISTS (SELECT #{to_table(table)}.'id' FROM #{to_table(table)} WHERE #{get_assoc(table)} AND )"
      else
        "#{to_table(table)}.'#{key}' #{to_cond(value)}"
      end
    end

    def parse_subquery(storage, old, table_name, table_fields)
      parse_fields(storage, old, {}, table_fields).map  { |type, fields|
        fields.map { |field, subtypes|
          case type
          when :required
            subtypes.map { |subtype, values|
              <<-SQL
              (
                SELECT
                  '#{table_name.downcase.pluralize}'.'#{field}'
                FROM
                  '#{table_name.downcase.pluralize}'
                WHERE
                  #{get_assoc(table_name)}
                  AND
                  '#{table_name.downcase.pluralize}'.'#{field}' #{subtype.upcase} #{format_arr(values)}
              ) >= #{values.length}
              SQL
            }.join(' AND ')
          when :include
            subtypes.map { |subtype, values|
              <<-SQL
              EXISTS (
                SELECT
                  #{table_name.downcase.pluralize}.id
                FROM
                  #{table_name.downcase.pluralize}
                WHERE
                  #{get_assoc(table_name)}
                  AND
                  #{table_name.downcase.pluralize}.#{field} #{subtype.upcase} ANY #{format_arr(values)}
              )
              SQL
            }.join(' AND ')
          when :exclude
            <<-SQL
            NOT EXISTS (
              SELECT
                '#{table_name.downcase.pluralize}'.'id'
              FROM
                '#{table_name.downcase.pluralize}'
              WHERE
                #{get_assoc(table_name)}
                AND
                '#{table_name.downcase.pluralize}'.'#{field}' #{subtype.upcase} ANY #{format_array}
            )
            SQL
          end
        }.join(' AND ')
      }.join(' AND ')
    end

    def format_arr(arr)
        "('\{#{arr.to_s[1..-2].gsub(/\"/, '')}\}'::#{get_type(arr.first)}[])"
    end

    def get_type(str)
      if numeric?(str)
        float?(str) ? "float" : "int"
      else
        "varchar"
      end
    end

    def float?(str)
      !!Float(str) rescue false
    end

    def numeric?(str)
      !!str.match(/\A[0-9.\"]+\Z/)
    end

    def parse_fields(storage, old, hash, fields)
      fields.each do |field, values|
        storage[field] = values.scan(/(?:[^\s"]+|"[^"]*")+/)
        storage[field].concat(old).uniq! unless old.nil?

        storage[field].each do |value|
          case value[0]
          when '+'
            value.shift
            type = :require
          when '-'
            value.shift
            type = :exclude
          else
            type = :include
          end
          (hash[type] ||= Hash.new)[field] ||= Hash.new
          if numeric?(value) || (value[0] == "\"" && value[-1] == "\"")
            (hash[type][field]['='] ||= Array.new) << value
          else
            (hash[type][field]['like'] ||= Array.new) << value
          end
        end
      end

      return hash
    end



    def search_order
      hash = params['order']
      hash.values.sort! do |a, b|
        hash[a] <=> hash[b]
      end
    end

    def get_assoc(table)
      if (table[-1] == 's')
        "#{name.downcase.pluralize}.id = #{table.pluralize}.#{name.downcase}_id"
      else
        "#{name.downcase.pluralize}.#{table}_id = #{table.pluralize}.'id'"
      end
    end

  end
end