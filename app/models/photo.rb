class Photo < ActiveRecord::Base
  include Notifiable

  belongs_to :user, inverse_of: :photos
  belongs_to :recipe, inverse_of: :photos

  has_attached_file :image, default_url: "missing_photo.png"

  validates :user, :recipe, presence: true
  validates :image, attachment_presence: true
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  def image_url=(url)
    self.image = URI.parse(url)
  end

  def event_string(event_id)
    case event_id
    when CREATED
      "#{self.user.username} submitted a photo to #{self.recipe.name}"
    else
      Notifiable.event_string(event_id)
    end
  end
end
