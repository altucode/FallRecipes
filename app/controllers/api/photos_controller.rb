class Api::PhotosController < ApplicationController
  before_action :require_current_user!

  def create
    @photo = current_user.photos.create(photo_params)
    if @photo.save
      @photo.recipe.user.notifications.create(event_id: Photo.CREATED, notifiable: @photo)
      render json: @photo
    else
      render json: @photo.errors.full_messages
    end
  end

  def destroy
    @photo = current_user.photos.find(params[:id])
    @photo ||= current_user.recipes.photos.find(params[:id])
    @photo.try(:destroy)
    render json: {}
  end

  private
  def photo_params
    params.require(:photo).permit(:recipe_id, :image, :caption)
  end
end
