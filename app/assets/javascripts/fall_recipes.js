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


FallRecipes.View = Backbone.View.extend({
  className: function() {
    return this.editable;
  }
});