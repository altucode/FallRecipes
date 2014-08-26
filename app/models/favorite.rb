class Favorite < ActiveRecord::Base
  validates :user, :recipe, presence: true

  belongs_to :recipe, inverse_of: :favorites
  belongs_to :user, inverse_of: :favorites
end
