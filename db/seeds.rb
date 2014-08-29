# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user1 = User.create(username: 'spitzinator', password: '123456', first_name: 'mark', last_name: 'spitz', email: 'markspitz@gmail.com')

user2 = User.create(username: 'john01', password: '123456', first_name: 'john', last_name: 'smith', email: 'johnsmith@aol.com')

recipe1 = Recipe.create(user: user1, name: 'boiled water', prep_time: 0, cook_time: 1800, servings: 1, desc: "How to boil water")

ingredient1_1 = Ingredient.create(recipe: recipe1, name: 'water', unit: 'cup', unit_qty: '4')

step1_1 = RecipeStep.create(recipe: recipe1, ord: 1, text: "fill pot with water and set on stove")

step1_2 = RecipeStep.create(recipe: recipe1, ord: 2, text: "set burner to 300 degrees farenheit")

step1_3 = RecipeStep.create(recipe: recipe1, ord: 3, text: "wait until water starts to bubble")

review1 = Review.create(recipe: recipe1, user: user2, body: "10/10 would send to olympics", score: 10)

recipe_box1 = RecipeBox.create(name: "How To", user: user2, recipes: [recipe1])

menu1 = Menu.create(name: "SampleMenu", user: user2, recipes: [recipe1])

follow1 = Subscription.create(subscribable: user1, subscriber: user2)

favorite1 = Subscription.create(subscribable: recipe1, subscriber: user2)
