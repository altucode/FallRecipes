class Subscription < ActiveRecord::Base
  include Notifiable

  belongs_to :subscribable, polymorphic: true
  belongs_to :subscriber, polymorphic: true

  has_many :notifications, inverse_of: :subscription, dependent: :destroy

  def event_string(event_id)
    case event_id
    when CREATED
      "#{self.subscriber.name} has subscribed to #{self.subscribable.name}"
    else
      Notifiable::event_string(event_id)
    end
  end

  validates :subscribable, :subscriber, presence: true
end
