class Review < ActiveRecord::Base
  include Notifiable

  belongs_to :recipe, inverse_of: :reviews
  belongs_to :user, inverse_of: :reviews

  validates :recipe, :user, presence: true
  validates :body, length: { minimum: 10 }

  def event_string(event_id)
    case event_id
    when CREATED
      "#{self.user.username} posted a review on #{self.recipe.name}"
    when UPDATED
      "#{self.user.username} updated their review on #{self.recipe.name}"
    else
      Notifiable.event_string(event_id)
    end
  end
end
