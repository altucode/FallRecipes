class Api::IngredientsController < ApplicationController
  before_action :require_recipe_author!

  def create
    @ingredient = current_recipe.create(ingredient_params)

    if @ingredient.valid?
      @ingredient.recipe.update_nutrition!
      @ingredient.recipe.notify(Recipe.UPDATED)
      render json: @ingredient, include: :nutrition_info
    else
      render json: @ingredient.errors.full_messages
    end
  end

  def update
    @ingredient = Ingredient.find(params[:id])
    if @ingredient.update_attributes(ingredient_params)
      @ingredient.recipe.update_nutrition!
      @ingredient.recipe.notify(Recipe.UPDATED)
      render json: @ingredient, include: :nutrition_info
    else
      render json: @ingredient.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @ingredient = current_recipe.find(params[:id])
    @ingredient.try(:destroy)
    @ingredient.recipe.update_nutrition!
  end

  private

  def current_recipe
    if params[:id]
      @ingredient = Ingredient.find(params[:id])
      @recipe = @ingredient.recipe
    else
      @recipe = Recipe.find(params[:ingredient][:recipe_id])
    end
  end

  def ingredient_params
    params.require(:ingredient).permit(:name, :unit, :unit_qty)
  end

end
