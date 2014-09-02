FallRecipes.Views.Ingredient = Backbone.View.extend({
  template: JST['ingredient'],

  render: function() {
    var content = this.template({ model: this.model });
    this.$el.html(content);

    return this;
  }
});