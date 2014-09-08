FallRecipes.Views.Ingredient = Backbone.View.extend({
  tagName: "li",
  className: "ingredient",
  template: JST['ingredient'],
  initialize: function(options) {
    this.$el.attr('data-index', options.index);
  },
  render: function() {
    var content = this.template({ model: this.model, units: FallRecipes.Views.Ingredient.UNITS });
    this.$el.html(content);

    this.delegateEvents();

    return this;
  }
});

FallRecipes.Views.Ingredient.UNITS = [
  'cup',
  'fl oz',
  'g',
  'kg',
  'l',
  'large',
  'lb',
  'ml',
  'oz',
  'pint',
  'quart',
  "single 9\"",
  'small',
  'stick',
  'tbsp',
  'tsp',
  'whole'
];