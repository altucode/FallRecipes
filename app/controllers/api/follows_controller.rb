class Api::FollowsController < ApplicationController
  before_action :require_current_user!

  def create
    @follow = current_user.followings.create(follow_params)
    if @follow.save
      render json: @follow
    else
      render json: @follow.errors.full_messages
    end
  end

  def destroy
    @follow = current_user.followings.find(params[:id])
    @follow.try(:destroy)
    render json: {}
  end

  private
  def follow_params
    params.permit(:user_id)
  end
end
