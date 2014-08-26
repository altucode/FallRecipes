json.id @recipe.id
json.name @recipe.name
json.image_url @recipe.image_url
json.prep_time @recipe.prep_time
json.cook_time @recipe.cook_time
json.servings @recipe.servings

json.ingredients @recipe.ingredients do |ingredient|
  json.
end