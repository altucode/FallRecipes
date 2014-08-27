json.users @users do |user|
  json.extract :id, :name
  json.avatar asset_path(user.avatar.url)
end