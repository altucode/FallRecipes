FallRecipes.Models.Recipe = FallRecipes.Model.extend({
  defaults: {
    'name': 'New Recipe',
    'prep_time': 0,
    'cook_time': 0
  },
  name: 'recipe',
  urlRoot: 'api/recipes',
  parse: function (response) {
    response.created_at = new Date(response.created_at);
    if (response.author) {
      this.author = response.author;
      delete response.author;
    }
    if (response.photos) {
      this.photos().set(response.photos, { parse: true });
      delete response.photos;
    }
    if (response.nutrition) {
      this._nutrition = response.nutrition;
      delete response.nutrition;
    }
    if (response.ingredients){
      this.ingredients().set(response.ingredients, { parse: true });
      delete response.ingredients;
    }
    if (response.directions) {
      this.directions().set(response.directions, { parse: true });
      delete response.recipe_steps;
    }
    if (response.reviews) {
      this.reviews().set(response.reviews, { parse: true });
      delete response.reviews;
    }
    return response;
  },
  update: function() {
    this.ingredients().update();
    this.directions().update();
    FallRecipes.Model.prototype.save.call(this);
  },
  photos: function() {
    return this._photos ||
      (this._photos = new FallRecipes.Collection({}, {
        model: FallRecipes.Model,
        url: 'api/photos'
      }));
  },
  ingredients: function() {
    return this._ingredients ||
      (this._ingredients = new FallRecipes.Collection({}, {
        model: FallRecipes.Models.Ingredient,
        url: 'api/ingredients'
      }));
  },
  nutrition: function() {
    return this._nutrition || (this._nutrition = {});
  },
  directions: function() {
    return this._directions ||
      (this._directions = new FallRecipes.Collection({}, {
        model: FallRecipes.Model,
        url: 'api/directions'
      }));
  },
  reviews: function() {
    return this._reviews ||
      (this._reviews = new FallRecipes.Collection({}, {
        model: FallRecipes.Model,
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
    case 'calories': return '';
    default: return 'g';
    }
  },
  getOptimal: function(key) {
    switch(key) {
    case 'protein':
    case 'potassium':
    case 'fiber': return 1;
    default: return 0;
    }
  }
});

FallRecipes.Models.Recipe.DAILY_VALUES = {
  calories: 2200,
  fat: 65,
  saturated_fat: 20,
  cholesterol: 300,
  sodium: 2200,
  potassium: 3500,
  carbohydrate: 300,
  sugar: 85,
  protein: 50,
  fiber: 25
};