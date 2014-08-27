FallRecipes.Collection = Backbone.Collection.extend({

  getOrFetch: function (id) {
    var collection = this;
    var model;
    if (model = this.get(id)) {
      model.fetch();
    } else {
      model = new this.model({ id: id });
      model.fetch({
        success: function() { this.add(model); }
      });
    }

    return model;
  }
});