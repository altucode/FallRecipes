FallRecipes.Models.User = Backbone.Model.extend({
  name: 'user',
  parse: function (response) {
    if (response.recipes) {
      this.recipes().set(response.recipes);
      delete response.recipes;
    }
    if (response.favorites) {
      this.favorites().set(response.favorites);
      delete response.favorites;
    }
    if (response.follows) {
      this.follows().set(response.follows);
      delete response.follows;
    }
    return response;
  },
  recipes: function() {
    return this._recipes ||
      (this._recipes = new FallRecipes.Collection({}, {
        model: Backbone.Model,
        url: 'api/recipes'
      }));
  },
  favorites: function() {
    return this._favorites ||
      (this._favorites = new FallRecipes.Collection({}, {
        model: Backbone.Model,
        url: 'api/favorites'
      }));
  },
  follows: function() {
    return this._follows ||
      (this._follows = new FallRecipes.Collection({}, {
        model: Backbone.Model,
        url: 'api/follows'
      }));
  }
});