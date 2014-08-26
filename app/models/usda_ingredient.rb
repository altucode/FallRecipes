class USDAIngredient < ActiveRecord::Base
  validates :item_name, :nf_serving_size_qty, :nf_serving_size_unit, presence: true
  validates :nf_calories, :tnf_otal_fat, :nf_saturated_fat, :nf_cholesterol, presence: true
  validates :nf_sodium, :nf_total_carbohydrate, :nf_sugars, :nf_protein, :nf_dietary_fiber, presence: true

  has_many :ingredients, class_name: "Ingredient", foreign_key: :usda_id, primary_key: :id

  def self.find_by_name(name)
    USDAIngredient.where(item_name: name).first || get_ingredient(name)
  end

  private

  def self.get_ingredient(name)
    url = Addressable::URI.new(
      scheme: 'https',
      host: 'api.nutritionix.com',
      path: '/v1_1/search'
    ).to_s

    data = RestClient.post(url, {
      appId: "",
      appKey: "",
      query: name,
      fields: [
        'item_name',
        'nf_serving_size_qty',
        'nf_serving_size_unit',
        'nf_calories',
        'nf_total_fat',
        'nf_saturated_fat',
        'nf_cholesterol',
        'nf_sodium',
        'nf_total_carbohydrate',
        'nf_sugars',
        'nf_protein',
        'nf_dietary_fiber'],
      offset: 0,
      limit: 1,
      filters: { item_type: 3 }
      })

    usda = USDAIngredient.new(JSON.parse(data)[:fields])

    usda.save

    usda
  end
end
