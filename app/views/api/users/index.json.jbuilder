json.users @users do |user|
  json.id user.id
  json.name user.name
  json.avatar_url user.avatar_url
end