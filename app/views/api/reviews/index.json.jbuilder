json.reviews @reviews do |review|
  json.extract! review, :id, :score, :body, :user_id, :created_at, :updated_at
  if (current_user.id == review.user_id)
    json.editable true
  end
  json.username review.user.username
  json.avatar_url asset_path(review.user.avatar.url)
end