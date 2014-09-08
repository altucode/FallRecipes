class Recipe < ActiveRecord::Base
  include Notifiable
  include Subscribable
  include Searchable

  before_save { |recipe| recipe.name.downcase! }

  belongs_to :user, inverse_of: :recipes, counter_cache: :recipe_count

  has_many :photos, inverse_of: :recipe, dependent: :destroy

  has_many :menu_items, inverse_of: :recipe, dependent: :destroy
  has_many :menus, through: :menu_items, source: :menu

  has_many :reviews, inverse_of: :recipe, dependent: :destroy
  has_many :reviewers, through: :reviews, source: :user

  has_many :taggings, inverse_of: :recipe, dependent: :destroy
  has_many :tags, through: :taggings, source: :tag

  has_many :ingredients, inverse_of: :recipe, dependent: :destroy

  has_many :directions, inverse_of: :recipe, dependent: :destroy

  def servings=(n)
    super(n < 1 ? 1 : n)
  end

  def score
    reviews.average(:score)
  end

  def update_nutrition!
    self.ingredients.each_with_object({}) { |i, o|
      i.nutrition_info.each do |key, val|
        o[key] = o[key] ? o[key] + val : val
      end
    }.each do |key, val|
      self[key.to_sym] = val / self.servings
    end
    self.save
  end

  def first_photo_url
    photo = self.photos.first
    photo.nil? ? "missing_photo.png" : photo.image.url
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
end
