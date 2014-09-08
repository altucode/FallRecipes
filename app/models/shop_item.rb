require 'food'

class ShopItem < ActiveRecord::Base
  belongs_to :shop_list, inverse_of: :shop_items


  def name=(name)
    self.food_id = Food.search(name).first['food_id']
  end

  def name
    Food.get(self.food_id)['food_name']
  end

  validates :shop_list, :unit, :unit_qty, presence: true
end
