json.extract! @recipe, :id, :name, :prep_time, :cook_time, :servings, :desc, :score, :created_at, :updated_at

json.author do
  json.id @recipe.user_id
  json.name @recipe.user.username
  json.avatar asset_path(@recipe.user.avatar.url)
end

json.editable (user_logged_in? && current_user.id == @recipe.user_id)

json.first_photo asset_path(@recipe.first_photo_url)

json.photos @recipe.photos do |photo|
  json.extract! photo, :id, :user_id, :caption
  json.username photo.user.username
  json.image asset_path(photo.image.url)
end

json.taggings @recipe.taggings do |tagging|
  json.extract! tagging, :id, :name
end

json.ingredients @recipe.ingredients do |ingredient|
  json.extract! ingredient, :id, :name, :unit, :unit_qty
end

json.directions @recipe.directions do |recipe_step|
  json.extract! recipe_step, :id, :ord, :body
end

json.reviews @recipe.reviews do |review|
  json.extract! review, :id, :user_id, :body, :score
  json.username review.user.username
  json.avatar asset_path(review.user.avatar.url)
end

json.nutrition do
  json.extract! @recipe, :calories, :carbohydrate, :cholesterol, :fat, :fiber, :potassium, :protein, :saturated_fat, :sodium, :sugar
end