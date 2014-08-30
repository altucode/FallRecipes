FallRecipes.Collection = Backbone.Collection.extend({

  initialize: function (models, options) {
    this.url = options.url;
  },

  getOrFetch: function (id) {
    var collection = this;
    var model;
    if (model = this.get(id)) {
      model.fetch();
    } else {
      model = new this.model({ id: id });
      collection = this;
      model.fetch({
        success: function() { collection.add(model); }
      });
    }

    return model;
  }
});