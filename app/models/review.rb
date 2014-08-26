class Review < ActiveRecord::Base
  validates :recipe, :user, presence: true
  validates :body, length: { minimum: 10 }

  belongs_to :recipe, inverse_of: :reviews

  belongs_to :user, inverse_of: :reviews
end
