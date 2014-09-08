class Direction < ActiveRecord::Base
  validates :recipe, :ord, presence: true
  validates :body, length: { minimum: 10 }

  belongs_to :recipe, inverse_of: :directions
end
