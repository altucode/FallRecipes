class Menu < ActiveRecord::Base
  include Notifiable
  include Subscribable

  belongs_to :user, inverse_of: :menus

  has_many :menu_items, inverse_of: :menu, dependent: :destroy
  has_many :recipes, through: :menu_items, source: :recipe

  validates :user, presence: true
  validates :name, presence: true, length: { minimum: 2 }

  def event_string(event_id)
    case event_id
    when UPDATED
      "#{self.name} was updated by #{self.user.username}"
    else
      Notifiable.event_string(event_id)
    end
  end
end
