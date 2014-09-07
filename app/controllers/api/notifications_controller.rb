class Api::NotificationsController < ApplicationController
  before_action :require_current_user!

  def destroy
    @notification = current_user.notifications.find(params[:id])
    @notification.try(:destroy)
    render json: {}
  end

end
