class USDAIngredient < ActiveRecord::Base
  validates :calories, :total_fat, :saturated_fat, :cholesterol, presence: true
  validates :sodium, :total_carbohydrate, :sugars, :protein, :dietary_fiber, presence: true

  def self.get_or_fetch_by_name(name)
    usda = USDAIngredient.where(name: name).first
    if usda.nil?
      url = Addressable::URI.new(
          scheme: 'https',
          host: 'api.nutritionix.com',
          path: '/v1_1/search'
        ).to_s
    end
  end
end
