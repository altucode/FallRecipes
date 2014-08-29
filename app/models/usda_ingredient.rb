require 'addressable/uri'

class USDAIngredient < ActiveRecord::Base
  validates :item_name, :nf_serving_size_qty, :nf_serving_size_unit, presence: true
  validates :nf_calories, :nf_total_fat, :nf_saturated_fat, :nf_cholesterol, presence: true
  validates :nf_sodium, :nf_total_carbohydrate, :nf_sugars, :nf_protein, :nf_dietary_fiber, presence: true

  has_many :ingredients, class_name: "Ingredient", foreign_key: :usda_id, primary_key: :id

  def self.find_by_name(name)
    USDAIngredient.find_by(item_name: name) || USDAIngredient.get_ingredient(name)
  end

  private

  def self.get_ingredient(name)
    url = Addressable::URI.new(
      scheme: 'https',
      host: 'api.nutritionix.com',
      path: '/v1_1/search'
    ).to_s

    data = RestClient.post(url, {
      appId: ENV['NUTRITIONIX_ACCESS_KEY_ID'],
      appKey: ENV['NUTRITIONIX_SECRET_ACCESS_KEY'],
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

    usda = USDAIngredient.new(JSON.parse(data, {symbolize_names: true})[:hits][0][:fields])
    usda.item_name = usda.item_name.split(/[,\s]/, 2)[0].downcase
    usda.save

    usda
  end
end
