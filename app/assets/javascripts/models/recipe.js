FallRecipes.Models.Recipe = Backbone.Model.extend({
  name: 'recipe',
  urlRoot: 'api/recipes',
  parse: function (response) {
    response.created_at = new Date(response.created_at);
    console.log(response.created_at);
    if (response.author) {
      this.author = response.author;
      delete response.author;
    }
    if (response.nutrition) {
      this._nutrition = response.nutrition;
      console.log(this._nutrition);
      delete response.nutrition;
    }
    if (response.ingredients){
      this.ingredients().set(response.ingredients, { parse: true });
      delete response.ingredients;
    }
    if (response.recipe_steps) {
      this.steps().set(response.recipe_steps, { parse: true });
      delete response.recipe_steps;
    }
    if (response.reviews) {
      this.reviews().set(response.reviews, { parse: true });
      console.log(this.reviews());
      delete response.reviews;
    }
    return response;
  },
  ingredients: function() {
    return this._ingredients ||
      (this._ingredients = new FallRecipes.Collection({}, {
        model: FallRecipes.Models.Model,
        url: 'api/ingredients'
      }));
  },
  nutrition: function() {
    return this._nutrition || (this._nutrition = {});
  },
  steps: function() {
    return this._steps ||
      (this._steps = new FallRecipes.Collection({}, {
        model: FallRecipes.Models.Model,
        url: 'api/recipe_steps'
      }));
  },
  reviews: function() {
    return this._reviews ||
      (this._reviews = new FallRecipes.Collection({}, {
        model: FallRecipes.Models.Model,
        url: 'api/reviews'
      }));
  },
  getDailyPercent: function(key) {
    return this.nutrition()[key] / FallRecipes.Models.Recipe.DAILY_VALUES[key];
  },
  getUnit: function(key) {
    switch(key) {
    case 'sodium':
    case 'potassium':
    case 'cholesterol': return 'mg';
    default: return 'g';
    }
  },
  getOptimal: function(key) {
    switch(key) {
    case 'protein':
    case 'potassium':
    case 'dietary_fiber': return 1;
    default: return 0;
    }
  }
});

FallRecipes.Models.Recipe.DAILY_VALUES = {
  calories: 2000,
  total_fat: 65,
  saturated_fat: 20,
  cholesterol: 300,
  sodium: 2200,
  potassium: 3500,
  total_carbs: 300,
  sugars: 85,
  protein: 50,
  dietary_fiber: 25
};