class Follow < ActiveRecord::Base
  validates :user, :follower, presence: :true

  belongs_to :user, inverse_of: :follows
  belongs_to :follower, inverse_of: :followings
end
