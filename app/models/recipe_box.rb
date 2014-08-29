class RecipeBox < ActiveRecord::Base
  belongs_to :user, inverse_of: :recipe_boxes

  has_many :recipe_cards, inverse_of: :recipe_box, dependent: :destroy
  has_many :recipes, through: :recipe_cards, source: :recipe

  validates :user, presence: true
  validates :name, presence: true, length: { minimum: 2 }
end
