json.extract! @recipe, :id, :name, :prep_time, :cook_time, :servings, :desc, :score, :created_at, :updated_at

json.author do
  json.id @recipe.user_id
  json.name @recipe.user.username
  json.image asset_path(@recipe.user.avatar.url)
end

if (user_logged_in? && current_user.id == @recipe.user_id)
  json.editable true
end

json.image asset_path(@recipe.image.url)

json.taggings @recipe.taggings do |tagging|
  json.extract! tagging, :id, :name
end

json.ingredients @recipe.ingredients do |ingredient|
  json.extract! ingredient, :id, :name, :unit, :unit_qty, :nutrition_info
end

json.recipe_steps @recipe.recipe_steps do |recipe_step|
  json.extract! recipe_step, :id, :ord, :text
end