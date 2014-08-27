class RecipeStep < ActiveRecord::Base
  belongs_to :recipe, inverse_of: :recipe_steps

  validates :recipe, :ord, presence: true
  validates :text, presence: true, length: { minimum: 5 }
end
