class Api::RecipesController < ApplicationController
  before_action :require_current_user!, except: [:index, :show]

  def index
    @recipes = Recipe.all
  end

  def search

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

  def search_params

  end
end
