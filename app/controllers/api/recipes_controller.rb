class Api::RecipesController < ApplicationController
  before_action :require_current_user!, except: [:index, :show]

  def index
    @search_log = {}
    print params
    print
    @recipes = Recipe.parse_search(params, @search_log, :user)
    print "LOG -->", @search_log
  end

  def show
    @recipe = Recipe.find(params[:id])
    render :show
  end

  def create
    @recipe = current_user.recipes.create(recipe_params)

    if @recipe
      current_user.notify(Recipe::CREATED, @recipe)
      render :show
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
      @recipe.update_nutrition!
      @recipe.notify(Recipe::UPDATED)
      render :show
    else
      render json: @recipe.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:name, :image, :prep_time, :cook_time, :servings, :desc)
  end
end
