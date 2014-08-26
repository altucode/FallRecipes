class Api::ReviewsController < ApplicationController
  before_action :require_current_user!, only: [:create]

  def index
    unless params[:recipe_id].nil?
      @reviews = Recipe.find(params[:recipe_id]).reviews
    else unless params[:user_id].nil?
      @reviews = User.find(params[:user_id]).reviews
    end
  end

  def create
    @review = current_user.reviews.create(review_params)

    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages
    end
  end

  def destroy
    @review = current_user.reviews.find(params[:id])
    @review.try(:destroy)
    render json: {}
  end

  private
  def review_params
    params.require(:review).permit(:score, :text)
  end
end
