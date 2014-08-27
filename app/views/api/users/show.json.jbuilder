json.extract! :id, :username, :email, :about, :created_at, :updated_at

json.avatar asset_path(@user.avatar.url)

json.recipes @user.latest_recipes(5) do |recipe|
  json.extract! :id, :name, :desc, :score, :created_at
  json.image asset_path(recipe.image.url)
end

json.favorites @user.favorites do |favorite|
  json.extract! :id, :recipe_id
  json.name favorite.recipe.name
  json.image asset_path(favorite.recipe.image.url)
end

json.followed_users @user.followings do |following|
  json.extract! :id, :user_id
  json.name following.user.name
  json.avatar asset_path(following.user.avatar.url)
end