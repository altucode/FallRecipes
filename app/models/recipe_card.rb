class RecipeCard < ActiveRecord::Base
  validates :recipe_box, :recipe, presence: true

  belongs_to :recipe_box, inverse_of: :recipe_cards

  belongs_to :recipe, inverse_of: :recipe_cards
end
