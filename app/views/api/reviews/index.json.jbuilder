json.reviews @reviews do |review|
  json.id review.id
  json.author review.user do
    json.id review.user.id
    json.username review.user.username
  end
  json.avatar_url review.user.avatar_url
  json.score review.score
  json.body review.body
end