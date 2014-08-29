class Api::RecipeCardsController < ApplicationController
  before_action :require_current_user!

  def create
    @recipe_card = current_recipe_box.recipe_cards.create(card_params)
    if @recipe_card.valid?
      render json: @recipe_card
    else
      render json: @recipe_card.errors.full_messages
    end
  end

  def destroy
    @recipe_card = RecipeCard.find(params[:id])
    @recipe_card.try(:destroy)
    render json: {}
  end

  private
  def current_recipe_box
    if params[:id]
      @recipe_card = Recipe.find(params[:id])
      @recipe_box = @recipe_card.recipe_box
    else
      @recipe_box = RecipeBox.find(params[:recipe_card][:recipe_box_id])
    end
  end
  def card_params
    params.require(:recipe_card).permit(:recipe_id)
  end
end
