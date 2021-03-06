class User < ActiveRecord::Base
  include Subscribable
  include Subscriber

  after_initialize :ensure_session_token

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>", icon: "50x50>" }, default_url: "missing_avatar.png"
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/

  has_many :recipes, inverse_of: :user

  has_many :shop_lists, inverse_of: :user, dependent: :destroy

  has_many :menus, inverse_of: :user, dependent: :destroy

  has_many :followers, through: :subs, source: :subscriber, source_type: "User"

  has_many :follows, through: :subscriptions, source: :subscribable, source_type: "User"

  has_many :favorites, through: :subscriptions, source: :subscribable, source_type: "Recipe"

  has_many :reviews, inverse_of: :user
  has_many :reviewed_recipes, through: :reviews, source: :recipe

  has_many :photos, inverse_of: :user, dependent: :destroy

  attr_reader :password

  def name
    self.username
  end

  def password=(password)
    @password = password;
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token while !!User.find_by(session_token: self.session_token)
    self.save

    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def latest_recipes(limit)
    limit ||= 5
    self.recipes.order(created_at: :desc).first(limit)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  validates :display_name, :username, presence: true, length: { minimum: 2 }
  validates :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: true
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
end
