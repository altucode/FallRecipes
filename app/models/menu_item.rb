class MenuItem < ActiveRecord::Base
  belongs_to :recipe, inverse_of: :menu_items
  belongs_to :menu, inverse_of: :menu_items

  def name
    self.recipe.name
  end

  validates :recipe, :menu, presence: :true
end
