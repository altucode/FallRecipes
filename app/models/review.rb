class Review < ActiveRecord::Base
  belongs_to :recipe, inverse_of: :reviews
  belongs_to :user, inverse_of: :reviews


  validates :recipe, :user, presence: true
  validates :body, length: { minimum: 10 }
end
