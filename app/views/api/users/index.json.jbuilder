json.users @users do |user|
  json.extract! user, :id, :username
  json.avatar asset_path(user.avatar.url)
end