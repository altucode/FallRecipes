FallRecipes.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'root'

  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();

    $("#content").html(view.render().$el);
    this._currentView = view;
  }
});