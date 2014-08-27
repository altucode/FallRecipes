class Tagging < ActiveRecord::Base
  belongs_to :recipe, inverse_of: :taggings
  belongs_to :tag, inverse_of: :taggings

  def name=(name)
    @tag_id = Tag.find_or_create_by_name(name).id
  end

  def name
    self.tag.name
  end

  validates :recipe, :tag, presence: true
end
