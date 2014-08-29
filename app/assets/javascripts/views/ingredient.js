FallRecipes.Views.Ingredient = Backbone.View.extend({
  template: JST['ingredient_view'],
  events: {
    'blur .editable .input': 'updateIngredient',
    'click .editable .delete': 'deleteIngredient'
  },

  render: function() {
    var content = this.template({ ingredient: this.model });
    this.$el.html(content);

    return this;
  }
});