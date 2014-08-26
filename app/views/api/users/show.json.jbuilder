json.username @user.username
json.email @user.email

json.avatar_url @user.avatar_url
json.about @user.about

json.recipes @user.latest_recipes(5) do |recipe|
  json.id recipe.id
  json.name recipe.name
  json.image_url recipe.image_url
  json.desc recipe.desc
  json.created_at recipe.created_at
end

json.favorites @user.favorites do |favorite|
  json.id favorite.id
  json.recipe_id favorite.recipe_id
  json.name favorite.recipe.name
  json.image_url favorite.recipe.image_url
end

json.followed_users @user.followings do |following|
  json.id following.id
  json.user_id following.user_id
  json.name following.user.name
  json.image_url favorite.user.avatar_url
end