class Api::UsersController < ApplicationController
  before_action :require_current_user!, only: [:update]

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    redirect_to root_url if params[:id] != current_user.id

    if current_user.update_attributes(user_params)
      render json: current_user
    else
      render json: current_user.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :first_name, :last_name, :email)
  end
end
