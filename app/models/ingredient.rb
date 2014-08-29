class Ingredient < ActiveRecord::Base
  validates :recipe, :unit_qty, :usda, presence: true
  validates :unit, length: { minimum: 1, allow_nil: true }

  belongs_to :recipe, inverse_of: :ingredients

  belongs_to :usda, class_name: "USDAIngredient", foreign_key: :usda_id, primary_key: :id

  def name=(name)
    self.usda = USDAIngredient.find_by_name(name);
  end

  def name
    self.usda.item_name
  end

  def nutrition_info
    ratio = self.get_usda_ratio
    self.usda.attributes.each_with_object({}) do |att, obj|
      if (att[0][0] == 'n' && att[0][3..4] != 'se')
        obj[att[0][3..-1]] = att[1] * ratio
      end
    end
  end

  def get_usda_ratio
    if (WEIGHT_RATIOS.has_key?(self.unit))
      (WEIGHT_RATIOS[self.unit] * self.unit_qty) /
      (WEIGHT_RATIOS[self.usda.nf_serving_size_unit] * self.usda.nf_serving_size_qty)
    elsif (VOLUME_RATIOS.has_key?(self.unit))
      (VOLUME_RATIOS[self.unit] * self.unit_qty) /
      (VOLUME_RATIOS[self.usda.nf_serving_size_unit] * self.usda.nf_serving_size_qty)
    else
      0.0
    end
  end

  private
  WEIGHT_RATIOS = {
    'g' => 1.0,
    'kg' => 1000.0,
    'oz' => 28.3495,
    'lb' => 453.592
  }
  VOLUME_RATIOS = {
    'ml' => 1.0,
    'l' => 1000.0,
    'tsp' => 4.92892,
    'tbsp' => 14.7868,
    'fl oz' => 29.5735,
    'cup' => 236.588,
    'pint' => 473.176,
    'quart' => 946.353
  }

end
