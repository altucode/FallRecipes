class Api::ReviewsController < ApplicationController
  before_action :require_current_user!, only: [:create]

  def index
    if !params[:recipe_id].nil?
      @reviews = Recipe.find(params[:recipe_id]).reviews
    else
      @reviews = Review.all
    end
  end

  def create
    @review = current_recipe.reviews.create(review_params)

    if @review.valid?
      @review.recipe.user.notifications.create(event_id: Review::CREATED, notifiable: @review)
      render json: @review
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @review = current_user.reviews.find(params[:id])
    @review.try(:destroy)
    render json: {}
  end

  def update
    @review = current_user.reviews.find(params[:id])

    if @user.update_attributes(review_params)
      @review.recipe.user.notifications.create(Review::UPDATED, @review)
      render json: @review
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def current_recipe
    if params[:id]
      @review = Reviews.find(params[:id])
      @recipe = @review.recipe
    else
      @recipe = Recipe.find(params[:recipe][:recipe_id])
    end
  end
  def review_params
    params.require(:review).permit(:score, :body)
  end
end
