require 'food'

class Ingredient < ActiveRecord::Base
  NUTRIENTS = [
    'calories',
    'carbohydrate',
    'cholesterol',
    'fat',
    'fiber',
    'potassium',
    'protein',
    'saturated_fat',
    'sodium',
    'sugar'
  ]

  validates :recipe, :unit_qty, :food_id, presence: true
  validates :unit, length: { minimum: 1, allow_nil: true }

  belongs_to :recipe, inverse_of: :ingredients

  def name=(name)
    super(name)
    self.food_id = Food.search(name).first['food_id'].to_i
  end

  def nutrition_info
    serving = self.get_serving
    serving.each_with_object({}) do |(key, val), obj|
      obj[key] = (val.to_f * @ratio) if NUTRIENTS.include?(key)
    end
  end

  def get_serving
    @ratio = 0.0
    fservings = Food.get(self.food_id)
    fservings = fservings['servings'] if fservings['servings']
    fservings = fservings['serving'] if fservings['serving']
    return fservings unless fservings.is_a?(Array)
    if fservings.any? { |serving| serving['measurement_description'] == self.unit }
      serving = fservings.find { |serving| serving['measurement_description'] == self.unit }
      @ratio = self.unit_qty / serving['number_of_units'].to_f
    elsif self.unit.length > 1 && fservings.any? { |serving| serving['measurement_description'].include?(self.unit) }
      serving = fservings.find { |serving| serving['measurement_description'].include?(self.unit) }
      @ratio = self.unit_qty / serving['number_of_units'].to_f
    elsif VOLUME_RATIOS.keys.include?(self.unit) && fservings.any? { |serving| VOLUME_RATIOS.keys.any? { |key| serving['measurement_description'].include?(key) } }
      serving = fservings.find { |serving| VOLUME_RATIOS.keys.any? { |key| key.length > 1 && serving['measurement_description'].include?(key) } }
      key = VOLUME_RATIOS.keys.find { |key| key.length > 1 && serving['measurement_description'].include?(key) }
      @ratio = (VOLUME_RATIOS[self.unit] * self.unit_qty) /
      (VOLUME_RATIOS[key] * serving['number_of_units'].to_f)
    elsif VOLUME_RATIOS.keys.include?(self.unit) && fservings.any? { |serving| VOLUME_RATIOS.keys.any? { |key| serving['serving_description'].include?(key) } }
      serving = fservings.find { |serving| VOLUME_RATIOS.keys.any? { |key| key.length > 1 && serving['serving_description'].include?(key) } }
      key = VOLUME_RATIOS.keys.find { |key| key.length > 1 && serving['serving_description'].include?(key) }
      @ratio = (VOLUME_RATIOS[self.unit] * self.unit_qty) /
      (VOLUME_RATIOS[key] * serving['number_of_units'].to_f)
    else
      serving = fservings.first
      if WEIGHT_RATIOS.keys.include?(self.unit)
        @ratio = (WEIGHT_RATIOS[self.unit] * self.unit_qty) /
        (WEIGHT_RATIOS[serving['metric_serving_unit']] * serving['metric_serving_amount'].to_f)
      end
    end
    return serving
  end

  private
  WEIGHT_RATIOS = {
    'g' => 1.0,
    'kg' => 1000.0,
    'oz' => 28.3495,
    'lb' => 453.592,
    'stick' => 113.404
  }
  VOLUME_RATIOS = {
    'ml' => 1.0,
    'l' => 1000.0,
    'tsp' => 4.92892,
    'tbsp' => 14.7868,
    'fl oz' => 29.5735,
    'stick' => 118.2944,
    'cup' => 236.588,
    'pint' => 473.176,
    'quart' => 946.353
  }
end
