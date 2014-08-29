class Notification < ActiveRecord::Base
  belongs_to :subscriber, polymorphic: true
  belongs_to :notifiable, polymorphic: true

  validates :subscriber, :notifiable, :event_id, presence: true
end
