class Api::SubscriptionsController < ApplicationController
  before_action :require_current_user!

  def create
    @sub = current_user.subscriptions.create(sub_params)
    if @sub.valid?
      if (@sub.subscribable_type == "User")
        @sub.subscribable.notifications.create(event_id: Subscription::CREATED, notifiable: @sub)
      end
      render json: @sub
    else
      render json: @sub.errors.full_messages
    end
  end

  def destroy
    @sub = Subscription.find(params[:id])
    @sub.try(:destroy)
    render json: {}
  end

  private
  def sub_params
    params.permit(:subscription).require(:subscribable_id, :subscribable_type)
  end
end
