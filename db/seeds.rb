# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user1 = User.create(display_name: "Mark Spitz", username: 'spitzinator', password: '123456', email: 'markspitz@gmail.com')

user2 = User.create(display_name: "Johnboy", username: 'john01', password: '123456', email: 'johnsmith@aol.com')

user3 = User.create(display_name: "Jim Wright", username: 'j_wright', password: '123456', email: 'j_wright@gmail.com')

boiled_water = Recipe.create(
  user: user1,
  name: "Boiled Water",
  desc: "How to boil water.",
  prep_time: 0,
  cook_time: 1800,
  servings: 1
)

boiled_water.tap do |recipe|
  recipe.directions.create(ord: 1, body: "Fill the pot with water and set it on the stove.")
  recipe.directions.create(ord: 2, body: "Set the burner to 212 F (100 C.)")
  recipe.directions.create(ord: 3, body: "Wait until the water starts to bubble.")
  recipe.ingredients.create(name: 'water', unit: 'cup', unit_qty: '4')
  recipe.reviews.create(user: user2, body: "5/5 would send to olympics", score: 5)
  recipe.photos.create(user: user1, image_url: "http://upload.wikimedia.org/wikipedia/commons/8/8e/Water_boiling_in_a_pot_on_a_stove.jpg", caption: "Hot!")
  recipe.update_nutrition!
end

pumpkin_pie = Recipe.create(
  user: user3,
  name: "Mom's Pumpkin Pie",
  desc: "This is the pumpkin pie that my mother has made for years. It is a rich pie with just the right amount of spices.",
  prep_time: 1800,
  cook_time: 3600,
  servings: 8,
)

pumpkin_pie.tap do |recipe|
  recipe.ingredients.create(name: "pie crust", unit: "single 9\"", unit_qty: 1)
  recipe.ingredients.create(name: "egg", unit: "large", unit_qty: 1)
  recipe.ingredients.create(name: "egg yolk", unit: "large", unit_qty: 1)
  recipe.ingredients.create(name: "sugar", unit: "cup", unit_qty: 0.5)
  recipe.ingredients.create(name: "brown sugar", unit: "cup", unit_qty: 0.5)
  recipe.ingredients.create(name: "salt", unit: "tsp", unit_qty: 1)
  recipe.ingredients.create(name: "cinnamon", unit: "tsp", unit_qty: 0.5)
  recipe.ingredients.create(name: "nutmeg", unit: "tsp", unit_qty: 0.5)
  recipe.ingredients.create(name: "ginger", unit: "tsp", unit_qty: 0.5)
  recipe.ingredients.create(name: "cloves", unit: "tsp", unit_qty: 0.25)
  recipe.ingredients.create(name: "milk", unit: "cup", unit_qty: 1.5)
  recipe.ingredients.create(name: "whipping cream", unit: "cup", unit_qty: 0.5)
  recipe.ingredients.create(name: "pumpkin", unit: "cup", unit_qty: 2)
  recipe.directions.create(ord: 1, body: "Preheat oven to 425 degrees F (220 degrees C.)")
  recipe.directions.create(ord: 2, body: "In a large bowl, combine eggs, egg yolk, white sugar and brown sugar. Add salt, cinnamon, nutmeg, ginger and cloves. Gradually stir in milk and cream. Stir in pumpkin. Pour filling into pie shell.")
  recipe.directions.create(ord: 3, body: "Bake for ten minutes in preheated oven. Reduce heat to 350 degrees F (175 degrees C), and bake for an additional 40 to 45 minutes, or until filling is set.")
  recipe.reviews.create(user: user1, body: "It's truly delicious!", score: 5)
  recipe.reviews.create(user: user2, body: "sux /10chars", score: 1)
  recipe.photos.create(user: user3, image_url: "http://www.pickyourown.org/pumpkin/pumpkinpiedone.jpg", caption: "Nice and brown.")
  recipe.update_nutrition!
end

follow1 = Subscription.create(subscribable: user1, subscriber: user2)

notice1 = user1.notifications.create(event_id: Subscription::CREATED, notifiable: follow1)

favorite1 = Subscription.create(subscribable: boiled_water, subscriber: user2)
