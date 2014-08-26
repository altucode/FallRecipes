class Api::UsersController < ApplicationController
  before_action :require_current_user!, only: [:update]

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render json: @user
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :first_name, :last_name, :email)
  end
end
