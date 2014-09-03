FallRecipes.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'root',
    'recipes': 'recipeIndex',
    'recipes/search': 'recipeSearch',
    'recipes/:id': 'recipeShow',
    'users': 'userIndex',
    'users/:id': 'userShow',

  },

  recipes: function() {
    return this._recipes ||
      (this._recipes = new FallRecipes.Collection([], {
        model: FallRecipes.Models.Recipe,
        url: '/api/recipes'
      }));
  },
  users: function() {
    return this._users ||
      (this._users = new FallRecipes.Collection([], {
        model: FallRecipes.Models.User,
        url: '/api/users'
      }));
  },

  recipeSearch: function() {
    var search = new FallRecipes.Views.RecipeSearch();
    this._swapView(search);
  },

  recipeShow: function(id) {
    var recipe = this.recipes().getOrFetch(id);
    var view = new FallRecipes.Views.RecipeShow({ model: recipe });
    this._swapView(view);
  },

  userShow: function (id) {
    var user = this.users().getOrFetch(id);
    var view = new FallRecipes.Views.User({ model: user });

    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    console.log("call");
    $("#content").html(view.render().$el);
    this._currentView = view;
  }
});