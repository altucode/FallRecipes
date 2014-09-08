json.extract! @user, :id, :display_name, :username, :email, :about, :created_at, :updated_at

json.avatar asset_path(@user.avatar.url)

json.recipes @user.latest_recipes(5) do |recipe|
  json.extract! recipe, :id, :name, :desc, :score, :created_at
  json.photo asset_path(recipe.first_photo_url)
end

json.favorites @user.favorites do |favorite|
  json.extract! favorite, :id
  json.name favorite.name
  json.photo asset_path(favorite.first_photo_url)
end

json.follows @user.subscriptions.where(subscribable_type: 'User') do |follow|
  json.extract! follow, :id, :subscribable_id
  json.username follow.subscribable.username
  json.avatar asset_path(follow.subscribable.avatar.url)
end

json.followers @user.followers do |follower|
  json.extract! follower, :id
  json.username follower.username
  json.avatar asset_path(follower.avatar.url)
end