FallRecipes.Models.Ingredient = Backbone.Model.extend({

  set: function(attrs, options) {
    if (attrs.hasOwnProperty('unit_qty')) {
      attrs.unit_qty = attrs.unit_qty.toString().fromRat();
    }

    return Backbone.Model.prototype.set.call(this, attrs, options);
  }
});