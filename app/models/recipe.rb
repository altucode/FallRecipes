class Recipe < ActiveRecord::Base
  validates :user, :prep_time, :cook_time, :servings, presence: true
  validates :name, presence: true, length: { minimum: 2 }

  belongs_to :user, inverse_of: :recipes

  has_many :favorites, inverse_of: :recipe, dependent: :destroy
  has_many :favorited_users, through: :favorites, source: :user

  has_many :recipe_cards, inverse_of: :recipe, dependent: :destroy
  has_many :recipe_boxes, through: :recipe_cards, source: :recipe_box

  has_many :menu_items, inverse_of: :recipe, dependent: :destroy
  has_many :menus, through: :menu_items, source: :menu

  has_many :reviews, inverse_of: :recipe, dependent: :destroy
  has_many :reviewers, through: :reviews, source: :user
end
