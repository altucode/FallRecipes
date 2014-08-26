class Api::RecipeBoxesController < ApplicationController
  before_action :require_current_user!

  def index
    render json: current_user.recipe_boxes
  end

  def show
    render json: RecipeBox.find(params[:id])
  end

  def create
    @recipe_box = current_user.recipe_boxes.create(recipe_box_params)

    if @recipe_box.save
      render json: @recipe_box
    else
      render json: @recipe_box.errors.full_messages
    end
  end

  private
  def recipe_box_params
    params.require(:recipe_box).permit(:name, recipe_cards: [])
  end
end
