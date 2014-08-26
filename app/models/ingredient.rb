class Ingredient < ActiveRecord::Base
  validates :recipe, :units, :usda_id, presence: true
  validates :unit_type, length: { minimum: 1, allow_nil: true }

  belongs_to :recipe, inverse_of: :ingredients

  def unit_type
    @unit_type ||= 'whole'
  end

  def type=(type)
    @usda_id = 0;
  end

end
