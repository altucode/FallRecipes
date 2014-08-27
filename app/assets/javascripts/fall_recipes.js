window.FallRecipes = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new FallRecipes.Routers.Router();
    Backbone.history.start();
  }
};