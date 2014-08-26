class Ingredient < ActiveRecord::Base
  validates :recipe, :units, :usda_id, presence: true
  validates :unit_type, length: { minimum: 1, allow_nil: true }

  belongs_to :recipe, inverse_of: :ingredients

  belongs_to :usda, class_name: "USDAIngredient", foreign_key: :usda_id, primary_key: :id

  def name=(name)
    @usda_id = USDAIngredient.find_by_name(name).id;
  end

  def nutrition_info
  end

end
