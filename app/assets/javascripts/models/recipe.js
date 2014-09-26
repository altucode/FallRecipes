FallRecipes.Models.Recipe = FallRecipes.Model.extend({
  defaults: {
    'name': 'New Recipe',
    'prep_time': 0,
    'cook_time': 0
  },
  objects: {
    author: {
      type: Object,
    },
    directions: {
      type: FallRecipes.Collection,
      props: { url: 'api/directions' }
    },
    ingredients: {
      type: FallRecipes.Collection,
      model: FallRecipes.Models.Ingredient,
      props: { url: 'api/ingredients' }
    },
    nutrition: {
      type: Object
    },
    photos: {
      type: FallRecipes.Collection,
      props: { url: 'api/photos' }
    },
    reviews: {
      type: FallRecipes.Collection,
      props: { url: 'api/reviews' }
    }
  },
  name: 'recipe',
  urlRoot: 'api/recipes',
  update: function() {
    this.ingredients().update();
    this.directions().update();
    this.save();
  },
  set: function(attrs, options) {
    if (attrs.hasOwnProperty('prep_time_hr')) {
      attrs.prep_time = this.get('prep_time');
      attrs.prep_time = attrs.prep_time % 3600 + parseInt(attrs.prep_time_hr) * 3600;
    } else if (attrs.hasOwnProperty('prep_time_min')) {
      attrs.prep_time = this.get('prep_time');
      attrs.prep_time += (parseInt(attrs.prep_time_min) * 60) - attrs.prep_time % 3600;
    } else if (attrs.hasOwnProperty('cook_time_hr')) {
      attrs.cook_time = this.get('cook_time');
      attrs.cook_time = attrs.cook_time % 3600 + parseInt(attrs.cook_time_hr) * 3600;
    } else if (attrs.hasOwnProperty('cook_time_min')) {
      attrs.cook_time = this.get('cook_time');
      attrs.cook_time += (parseInt(attrs.cook_time_min) * 60) - attrs.cook_time % 3600;
    }
    return FallRecipes.Model.prototype.set.call(this, attrs, options);
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