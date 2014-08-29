class Menu < ActiveRecord::Base
  include Notifiable

  belongs_to :user, inverse_of: :menus

  has_many :menu_items, inverse_of: :menu, dependent: :destroy
  has_many :recipes, through: :menu_items, source: :recipe

  validates :user, presence: true
  validates :name, presence: true, length: { minimum: 2 }
end
