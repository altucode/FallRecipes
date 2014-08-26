json.recipes @recipes do |recipe|
  json.id recipe.id
  json.name recipe.name
  json.image_url recipe.image_url
  json.desc recipe.desc
  json.score recipe.score
end