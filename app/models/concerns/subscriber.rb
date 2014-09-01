module Subscriber
  extend ActiveSupport::Concern

  included do
    has_many :notifications, as: :subscriber, dependent: :destroy

    has_many :subscriptions, as: :subscriber
    has_many :notifiables, through: :subscriptions
  end

  def pending_notifications
    notifications.where(is_read: false)
  end
end