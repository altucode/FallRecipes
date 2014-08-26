class RecipeBox < ActiveRecord::Base
  validates :user, :recipe, presence: true
  validates :name, presence: true, length: { minimum: 2 }

  has_many :recipe_cards, inverse_of: :recipe_box, dependent: :destroy
  has_many :recipes, through: :recipe_cards, source: :recipe
end
