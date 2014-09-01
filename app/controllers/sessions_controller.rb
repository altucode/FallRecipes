class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if user.nil?
      render json: { errors: ["Username or password were incorrect"]}, status: 401
    else
      login!(user)
      redirect_to root_url
    end
  end

  def destroy
    logout!
    flash[:notice] = "Successfully logged out"
    redirect_to root_url
  end
end
