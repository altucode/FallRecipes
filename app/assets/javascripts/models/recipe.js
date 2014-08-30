FallRecipes.Models.Recipe = Backbone.Model.extend({
  name: 'recipe',
  urlRoot: 'api/recipes',
  parse: function (response) {
    if (response.author) {
      this.author = response.author;
      delete response.author;
    }
    if (response.ingredients){
      this.ingredients().set(response.ingredients, { parse: true });
      delete response.ingredients;
    }
    if (response.recipe_steps) {
      this.steps().set(response.recipe_steps, { parse: true });
      delete response.recipe_steps;
    }
    return response;
  },
  ingredients: function() {
    return this._ingredients ||
      (this._ingredients = new FallRecipes.Collection({}, {
        model: FallRecipes.Models.Model,
        url: 'api/ingredients'
      }));
  },
  steps: function() {
    return this._steps ||
      (this._steps = new FallRecipes.Collection({}, {
        model: FallRecipes.Models.Model,
        url: 'api/recipe_steps'
      }));
  }
});