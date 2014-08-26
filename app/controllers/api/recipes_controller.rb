class Api::RecipesController < ApplicationController
  before_action :require_current_user!, only: [:create]

  def index

  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def create
    @recipe = current_user.recipes.create(recipe_params)

    if @recipe.save
      render json: @recipe
    else
      render json: @recipe.errors.full_messages
    end
  end

  private
  def recipe_params
    params.require(:recipe).permit(:name, :image, :prep_time, :cook_time, :servings, recipe_steps: [], ingredients: [])
  end
end
