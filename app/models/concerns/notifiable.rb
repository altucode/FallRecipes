module Notifiable
  extend ActiveSupport::Concern

  included do
    has_many :notices, class_name: "Notification", as: :notifiable
  end

  module EVENT_ID
    CREATED = 0
    UPDATED = 1
    REMOVED = 2
  end

  def event_string(event_id); raise MESS; end
end