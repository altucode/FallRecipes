class Recipe < ActiveRecord::Base
  include Notifiable
  include Subscribable
  include Searchable

  belongs_to :user, inverse_of: :recipes, counter_cache: :recipe_count

  has_many :photos, inverse_of: :recipe, dependent: :destroy

  has_many :recipe_cards, inverse_of: :recipe, dependent: :destroy
  has_many :recipe_boxes, through: :recipe_cards, source: :recipe_box

  has_many :menu_items, inverse_of: :recipe, dependent: :destroy
  has_many :menus, through: :menu_items, source: :menu

  has_many :reviews, inverse_of: :recipe, dependent: :destroy
  has_many :reviewers, through: :reviews, source: :user

  has_many :taggings, inverse_of: :recipe, dependent: :destroy
  has_many :tags, through: :taggings, source: :tag

  has_many :ingredients, inverse_of: :recipe, dependent: :destroy
  has_many :ingredient_types, through: :ingredients, source: :usda

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

  def event_string(event_id)
    case event_id
    when CREATED
      "#{self.user.username} posted a new recipe: #{self.recipe.name}"
    when UPDATED
      "#{self.name} was updated by #{self.user.username}"
    else
      Notifiable.event_string(event_id)
    end
  end

  validates :user, :prep_time, :cook_time, :servings, presence: true
  validates :name, presence: true, length: { minimum: 2 }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
