class Api::RecipeBoxesController < ApplicationController
  before_action :require_current_user!, except: [:show]

  def show
    @recipe_box = RecipeBox.find(params[:id])
  end

  def create
    @recipe_box = current_user.recipe_boxes.create(recipe_box_params)

    if @recipe_box.save
      render json: @recipe_box
    else
      render json: @recipe_box.errors.full_messages
    end
  end

  def destroy
    @recipe_box = current_user.recipe_boxes.find(params[:id])
    @recipe_box.try(:destroy)
    render json: {}
  end

  def update
    @recipe_box = current_user.recipe_boxes.find(params[:id])

    if @recipe_box.update_attributes(recipe_box_params)
      render json: @recipe_box
    else
      render json: @recipe_box.errors.full_messages
    end
  end

  private
  def recipe_box_params
    params.require(:recipe_box).permit(:name)
  end
end
