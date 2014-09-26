FallRecipes.Views.Ingredient = FallRecipes.View.extend({
  tagName: "li",
  _className: "ingredient",
  template: JST['ingredient'],
  _templateData: {
    'units'
  },
  units: function() {
    return FallRecipes.Views.Ingredient.UNITS;
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