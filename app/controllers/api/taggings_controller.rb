class Api::TaggingsController < ApplicationController
  before_action :require_recipe_author!

  def create
    @tagging = current_recipe.taggings.create(tagging_params)

    if @tagging.save
      render json: @tagging
    else
      render json: @tagging.errors.full_messages
    end
  end

  def destroy
    @tagging = Tagging.find(params[:id])
    @tagging.try(:destroy)
    render json: {}
  end

  private

  def current_recipe
    if params[:id]
      @tagging = Tagging.find(params[:id])
      @recipe = @tagging.recipe
    else
      @recipe = Recipe.find(params[:tagging][:recipe_id])
    end
  end

  def tagging_params
    params.require(:tagging).permit(:recipe_id, :name)
  end
end
