module Notifiable
  extend ActiveSupport::Concern

  included do
    has_many :notices, class_name: "Notification", as: :notifiable

    has_many :subs, class_name: "Subscription", as: :notifiable
    has_many :subscribers, through: :subscriptions
  end

  def notify(event_id, notifiable)
    notifiable ||= self
    self.subscribers.each do |subscriber|
      subscriber.notifications.create(notifiable: notifiable, event_id: event_id)
    end
  end
end