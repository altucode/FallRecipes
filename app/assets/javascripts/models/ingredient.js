FallRecipes.Models.Ingredient = FallRecipes.Model.extend({
  defaults: {
    'unit': 'g',
    'unit_qty': '1'
  },
  initialize: function(attrs, options) {
  },
  set: function(attrs, options) {
    if (attrs.hasOwnProperty('unit_qty')) {
      attrs.unit_qty = attrs.unit_qty.toString().fromRat();
    }

    return FallRecipes.Model.prototype.set.call(this, attrs, options);
  }
});