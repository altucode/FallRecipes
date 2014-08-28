class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :user_logged_in?

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def user_logged_in?
    !!current_user
  end

  def require_current_user!
    redirect_to new_session_url if current_user.nil?
  end

  def require_recipe_author!
    redirect_to root if current_user.id != current_recipe.user_id
  end

  def logout!
    current_user.try(:reset_session_token)
    session[:session_token] = nil
  end
end
