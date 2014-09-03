json.recipes @recipes do |recipe|
  json.extract! recipe, :id, :name, :prep_time, :cook_time, :servings, :desc, :score, :created_at, :updated_at
  json.image asset_path(recipe.image.url)
end

json.log @search_log