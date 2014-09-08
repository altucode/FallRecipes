class Api::DirectionsController < ApplicationController

  before_action :require_recipe_author!

  def create
    @direction = current_recipe.directions.create(direction_params)

    if @direction.valid?
      @direction.recipe.notify(Recipe::UPDATED, @direction.recipe)
      render json: @direction
    else
      render json: @direction.errors.full_messages
    end
  end

  def update
    @direction = Direction.find(params[:id])
    if @direction.update_attributes(direction_params)
      @direction.recipe.notify(Recipe::UPDATED, @direction.recipe)
      render json: @direction
    else
      render json: @direction.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @direction = current_recipe.directions.find(params[:id])
    @direction.try(:destroy)
  end

  private

  def current_recipe
    if params[:id]
      @direction = Direction.find(params[:id])
      @recipe = @direction.recipe
    else
      @recipe = Recipe.find(params[:direction][:recipe_id])
    end
  end

  def direction_params
    params.require(:direction).permit(:ord, :body)
  end
end
