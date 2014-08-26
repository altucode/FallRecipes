class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if user.nil?
      render json: "Credentials were wrong"
    else
      login!(user)
    end
  end

  def destroy
    logout!
  end
end
