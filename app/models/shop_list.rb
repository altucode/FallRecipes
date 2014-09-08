class ShopList < ActiveRecord::Base
  belongs_to :user, inverse_of: :shop_lists

  has_many :shop_items, inverse_of: :shop_list, dependent: :destroy

  validates :user, :name,  presence: :true
end
