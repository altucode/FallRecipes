class Subscription < ActiveRecord::Base
  belongs_to :notifiable, polymorphic: true
  belongs_to :subscriber, polymorphic: true

  validates :notifiable, :subscriber, presence: true
end
