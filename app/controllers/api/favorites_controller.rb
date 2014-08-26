class Api::FavoritesController < ApplicationController
  before_action :require_current_user!, only: [:create, :destroy]

  def create
    @favorite = current_user.favorites.create(favorite_params)

    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors.full_messages
    end
  end

  def destroy
    @favorite = Favorites.where(recipe_id: params[:recipe_id], user_id: current_user.id).first
    @favorite.destroy
    render json: {}
  end

  private
  def favorite_params
    params.permit(:recipe_id)
  end
end
