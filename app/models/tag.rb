class Tag < ActiveRecord::Base
  validates :name, presence: true, length: { minimum: 2 }, uniqueness: true

  has_many :taggings, inverse_of: :tag, dependent: :destroy
  has_many :recipes, through: :taggings, source: :recipe

  def self.find_or_create_by_name(name)
    Tag.find_by(name: name) || Tag.create(name: name)
  end
end
