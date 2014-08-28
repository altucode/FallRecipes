class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if user.nil?
      flash.now[:error] = "Credentials were wrong"
      render :new
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
