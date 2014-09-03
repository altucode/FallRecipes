require 'convenience'

module Searchable
extend ActiveSupport::Concern

  module ClassMethods

    # params -- The search parameters as a structured hash (typically JSON)
    # storage -- The hash in which to save the parsed search criteria
    #
    def parse_search(params, storage = {})
      joins(params['criteria'].keys.map(&:to_sym))
          .where(parse_query(storage, params['old'], nil, name.downcase.pluralize, params['criteria']))
          .order(search_order(params))
          .limit(params['limit'])
          .offset((params['page'].to_i - 1)*params['limit'].to_i)
          .distinct
    end

    def get_qstring(storage, old, criteria)
      parse_query(storage, old, criteria)
    end

    def get_tableString(table)
      get_table(table)
    end

    private

    def parse_query(storage, old, obj, obj_name = nil, prev_name = name.downcase)
      puts 'storage -->', storage
      puts "obj: #{obj_name} -->", obj
      if (obj.is_a?(Hash))
        obj.map { |k, v|
          storage[k] = v.is_a?(Hash) ? Hash.new : Array.new
          "(#{parse_query(storage[k], old ? old[k] : nil, v, k, obj_name)})"
        }.join(" AND ")
      else
        parse_fields(storage ||= Array.new, old, {}, obj).map  { |param_type, operators|
            operators.map { |operator, values|
              build_subquery(param_type, prev_name, obj_name, operator, values)
            }.join(' AND ')
        }.join(' AND ')
      end
    end

    def format_arr(arr, op = '=')
      case op
      when '='
        "('\{#{arr.to_s[1..-2].gsub(/\"/, '')}\}'::#{get_type(arr.first)}[])"
      when 'like'
        "('\{#{arr.map{ |e| "%#{e}%" }.to_s[1..-2].gsub(/\"/, '')}\}'::#{get_type(arr.first)}[])"
      end
    end

    def get_type(str)
      if str.numeric?
        str.float? ? "float" : "int"
      else
        "varchar"
      end
    end

    # IN: +a -b c d "e"
    # OUT: {
    #   +: { 'like' => [a] },
    #   -: { 'like' => [b] },
    #  '': { 'like' => [c, d], '=' => [e]}
    # }
    #
    #
    #

    def parse_fields(storage, old, hash, values)
      storage.concat(values.scan(/(?:[^\s"]+|"[^"]*")+/)) unless values.nil?
      storage.concat(old).uniq! unless old.nil?

      storage.each do |value|
        tmp = value
        if ['+','-'].include?(tmp[0])
          type = tmp.slice!(0).to_sym
        else
          type = :''
        end
        hash[type] ||= Hash.new
        if tmp.numeric? || (value[0] == "\"" && value[-1] == "\"")
          (hash[type]['='] ||= Array.new) << tmp
        else
          (hash[type]['like'] ||= Array.new) << tmp
        end
      end

      return hash
    end

    def build_subquery(param_type, table_name, field, operator, values)
      puts "param_type, table_name, field, op, values : ", param_type, table_name, field, operator, values
      case param_type
      when :+
        if (table_name.singularize == name.underscore)
          build_condition(values, operator, field, table_name, param_type)
        else
          <<-SQL
          (
            SELECT
              COUNT(*)
            FROM
              #{get_table(table_name)}
            WHERE
              #{get_relation(table_name)}
              AND
              #{build_condition(values, operator, field, table_name)}
          ) >= #{values.length}
          SQL
        end
      when :-
        if (table_name.singularize == name.underscore)
          build_condition(values, operator, field, table_name, param_type)
        else
          <<-SQL
          NOT EXISTS (
            SELECT
              *
            FROM
              #{get_table(table_name)}
            WHERE
              #{get_relation(table_name)}
              AND
              #{build_condition(values, operator, field, table_name)}
          )
          SQL
        end
      else
        if (table_name.singularize == name.underscore)
          build_condition(values, operator, field, table_name)
        else
          <<-SQL
          EXISTS (
            SELECT
              *
            FROM
              #{get_table(table_name)}
            WHERE
              #{get_relation(table_name)}
              AND
              #{build_condition(values, operator, field, table_name)}
          )
          SQL
        end
      end
    end

    def build_condition(values, operator, field, table_name = name.underscore.downcase, param_type = :'')
      "#{reflections[table_name.to_sym].klass.name.underscore.pluralize}.#{field} #{'NOT ' if param_type == :-}#{operator.upcase} ANY #{format_arr(values, operator)}"
    end




    def search_order(params)
      hash = params['order'] || { 'name' => { 'asc' => true, 'ord' => 1}}
      hash.sort_by { |key, val|
        val['ord']
      }.map { |key, val|
        { key => val['asc'] ? :asc : :desc }
      }
    end

    def get_table(table)
      puts table.to_sym
      puts reflections.has_key?(table.to_sym)
      if reflections.has_key?(table.to_sym)
        if reflections[table.to_sym].options.has_key?(:through)
          through = reflections[table.to_sym].options[:through]
          klass = reflections[table.to_sym].klass
          str = reflect_on_association(through).plural_name
          puts "through, klass, str : ", through, klass, str
          loop do
            str.concat(" JOIN #{klass.name.underscore.pluralize} ON #{get_relation(reflections[through].klass, klass, klass.reflections[through])}")
            break unless klass.reflections[through].options.has_key?(:through)
            through = klass.reflections[through].options[:through]
            klass = klass.reflections[through].klass
          end

          str
        else
          reflections[table.to_sym].klass.name.underscore.pluralize
        end
      end
    end

    def get_relation(t1, t2 = self, assoc = t2.reflect_on_association(t1.to_s.underscore.to_sym))
      puts "class1, class2, assoc : ", t1, t2, assoc
      if (assoc.options.has_key?(:through))
        assoc = t2.reflect_on_association(assoc.options[:through])
        t1 = assoc.klass
        puts "New class1: ", t1
      end
      if (assoc.macro == :has_many)
        "#{t1.to_s.underscore.pluralize}.#{assoc.foreign_key} = #{t2.to_s.underscore.pluralize}.id"
      else
        "#{t1.to_s.underscore.pluralize}.id = '#{t2.to_s.underscore.pluralize}.#{assoc.foreign_key}"
      end
    end

  end
end