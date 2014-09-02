class Api::RecipesController < ApplicationController
  before_action :require_current_user!, except: [:search, :show]

  def search
    self.parse_search
  end

  def show
    @recipe = Recipe.find(params[:id])
    render :show
  end

  def create
    @recipe = current_user.recipes.create(recipe_params)

    if @recipe
      current_user.notify(Recipe.CREATED, @recipe)
      render json: @recipe
    else
      render json: @recipe.errors.full_messages
    end
  end

  def destroy
    @recipe = current_user.recipes.find(params[:id])
    @review.try(:destroy)
    render json: {}
  end

  def update
    @recipe = current_user.recipes.find(params[:id])

    if @recipe.update_attributes(recipe_params)
      @recipe.notify(Recipe.UPDATED)
      render json: @recipe
    else
      render json: @recipe.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:name, :image, :prep_time, :cook_time, :servings, :desc)
  end

  def parse_search
    @recipes = Recipe.joins(params['tables'].map(&:to_sym))

    @recipes = @recipes
                .where(parse_query(nil, nil, params["tables"]))
                .limit(params[:limit])
                .offset(params[:offset])
  end

  def parse_query(table, key, values)
    if (values.is_a?(Hash))
      values.map { |k, v| "(#{parse_query(key, k, v)})" }.join(" AND ")
    else
      values.map { |value|
        "'#{table}#{'s' if table[-1] != 's'}'.'#{key[0] == '!' ? "#{key[1..-1]}' NOT" : "#{key}'"} #{parse_condition(value)}"
      }.join(" #{key[0] == '!' ? "OR" : "AND"} ")
    end
  end

  def parse_condition(value)
    if value.is_a?(String)
      if value[0] != "\"" || value[-1] != "\""
        "LIKE '#{value.split(/['\"]/).reject(&:empty?).first.downcase}'"
      else
        "= '#{(value[1..-2]).downcase}'"
      end
    else
      "= #{value}"
    end
  end
end
