class Recipe < ActiveRecord::Base

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>"}, default_url: "/images/:style/default_avatar.png"

  belongs_to :user, inverse_of: :recipes

  has_many :favorites, inverse_of: :recipe, dependent: :destroy
  has_many :favorited_users, through: :favorites, source: :user

  has_many :recipe_cards, inverse_of: :recipe, dependent: :destroy
  has_many :recipe_boxes, through: :recipe_cards, source: :recipe_box

  has_many :menu_items, inverse_of: :recipe, dependent: :destroy
  has_many :menus, through: :menu_items, source: :menu

  has_many :reviews, inverse_of: :recipe, dependent: :destroy
  has_many :reviewers, through: :reviews, source: :user

  has_many :taggings, inverse_of: :recipe, dependent: :destroy
  has_many :tags, through: :taggings, source: :tag

  has_many :ingredients, inverse_of: :recipe, dependent: :destroy

  has_many :recipe_steps, inverse_of: :recipe, dependent: :destroy

  def score
    reviews.average(:score)
  end

  def nutrition_info
    self.ingredients.each_with_object({}) do |i, o|
      i.nutrition_info.each do |key, val|
        o[key] = o[key] ? o[key] + val : val
      end
    end
  end

  validates :user, :prep_time, :cook_time, :servings, presence: true
  validates :name, presence: true, length: { minimum: 2 }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
