module Subscribable
  extend ActiveSupport::Concern

  included do
    has_many :subs, class_name: "Subscription", as: :subscribable
    has_many :subscribers, through: :subs, source_type: "User"
  end

  def notify(event_id, notifiable)
    notifiable ||= self
    self.subscribers.each do |subscriber|
      subscriber.notifications.create(notifiable: notifiable, event_id: event_id)
    end
  end

  module EVENT_ID
    CREATED = 0
    UPDATED = 1
  end
end