class RecipeCard < ActiveRecord::Base
  belongs_to :recipe_box, inverse_of: :recipe_cards
  belongs_to :recipe, inverse_of: :recipe_cards

  def name
    self.recipe.name
  end

  validates :recipe_box, :recipe, presence: true
end
