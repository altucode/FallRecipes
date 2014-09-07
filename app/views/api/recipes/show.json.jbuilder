json.extract! @recipe, :id, :name, :prep_time, :cook_time, :servings, :desc, :score, :created_at, :updated_at

json.author do
  json.id @recipe.user_id
  json.name @recipe.user.username
  json.avatar asset_path(@recipe.user.avatar.url)
end

if (user_logged_in? && current_user.id == @recipe.user_id)
  json.editable true
end

json.photos @recipe.photos do |photo|
  json.extract! photo, :id, :user_id, :caption
  json.username photo.user.username
  json.image asset_path(photo.image.url)
end

json.taggings @recipe.taggings do |tagging|
  json.extract! tagging, :id, :name
end

json.ingredients @recipe.ingredients do |ingredient|
  json.extract! ingredient, :id, :name, :unit, :unit_qty, :nutrition_info
end

json.recipe_steps @recipe.recipe_steps do |recipe_step|
  json.extract! recipe_step, :id, :ord, :text
end

json.reviews @recipe.reviews do |review|
  json.extract! review, :id, :user_id, :body, :score
  json.username review.user.username
  json.avatar asset_path(review.user.avatar.url)
end

json.nutrition @recipe.nutrition_info