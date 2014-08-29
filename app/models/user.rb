class User < ActiveRecord::Base
  after_initialize :ensure_session_token

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>", icon: "50x50>" }, default_url: "missing_avatar.png"

  has_many :recipes, inverse_of: :user

  has_many :recipe_boxes, inverse_of: :user, dependent: :destroy

  has_many :menus, inverse_of: :user, dependent: :destroy

  has_many :followings, class_name: "Follow", foreign_key: :follower_id, primary_key: :id, dependent: :destroy
  has_many :followed_users, through: :followings, source: :user

  has_many :follows, class_name: "Follow", foreign_key: :user_id, primary_key: :id, dependent: :destroy
  has_many :followers, through: :follows, source: :follower

  has_many :favorites, inverse_of: :user, dependent: :destroy
  has_many :favorite_recipes, through: :favorites, source: :recipe

  has_many :reviews, inverse_of: :user
  has_many :reviewed_recipes, through: :reviews, source: :recipe

  attr_reader :password

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

  validates :username, presence: true, length: { minimum: 2 }
  validates :first_name, :last_name, :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: true
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
end
