class Api::RecipesController < ApplicationController
  before_action :require_current_user!, except: [:index, :show]

  def index
    unless params[:user_id].nil?
      @recipes = User.find(:user_id).recipes
    else unless params[:recipe_box_id].nil?
      @recipes = RecipeBox.find(params[:recipe_box_id]).recipes
    else unless params[:menu_id].nil?
      @recipes = Menu.find(params[:menu_id]).recipes
    end
  end

  def search

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

  def destroy
    @recipe = current_user.recipes.find(params[:id])
    @review.try(:destroy)
    render json: {}
  end

  def update
    @recipe = current_user.recipes.find(params[:id])

    if @recipe.update_attributes(recipe_params)
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
