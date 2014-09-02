FallRecipes.Views.RecipeShow = Backbone.View.extend({
  template: JST["recipe"],
  className: function() {
    return 'recipe' + (this.model.get('editable') ? 'editable' : '');
  },
  events: {
    "submit .editable .ingredient-form": "addIngredient",
    "click .editable .ingredient .remove": "removeIngredient",
    "blur .editable .ingredient .input": "updateIngredient",
    "submit .editable .recipe-step-form": "addRecipeStep",
    "click .editable .recipe-step .remove": "removeRecipeStep",
    "blur .editable .recipe-step .input": "updateRecipeStep"
  },
  initialize: function () {
    this.listenTo(this.model, "add remove change", this.render);
  },
  render: function () {
    var content = this.template({ recipe: this.model });
    this.$el.html(content);
    this.$el.children('.ingredient-box').append(this.ingredientView().render().$el);
    this.$el.children('.instruction-box').append(this.instructionView().render().$el);

    return this;
  },
  ingredientView: function() {
    return this._ingredientView ||
      (this._ingredientView = new FallRecipes.Views.ListView({
        itemView: FallRecipes.Views.Ingredient,
        collection: this.model.ingredients()
      }));
  },
  instructionView: function() {
    return this._instructionView ||
      (this._instructionView = new FallRecipes.Views.ListView({
        itemView: FallRecipes.Views.Ingredient,
        collection: this.model.steps()
      }));
  }


  // ,
//   addIngredient: function (event) {
//     var formData = $(event.target).serializeJSON();
//     formData.recipe_id = this.model.id;
//     this.model.ingredients().create(formData);
//   },
//   removeIngredient: function (event) {
//     this.model.ingredients().get($(event.target).attr('data-id')).destroy();
//   },
//   updateIngredient: function (event) {
//     var ingredient = this.model.ingredients().get($(event.target).attr('data-id'));
//     ingredient.set({ $(event.target).attr('name'): $(event.target).val() });
//   },
//   addRecipeStep: function (event) {
//     var formData = $(event.target).serializeJSON();
//     formData.recipe_id = this.model.id;
//     this.mode.steps().create(formData);
//   },
//   removeRecipeStep: function (event) {
//     this.mode.steps().get($(event.target).attr('data-id')).destroy();
//   },
//   updateRecipeStep: function (event) {
//     var ingredient = this.model.ingredients().get($(event.target).attr('data-id'));
//     ingredient.set({ $(event.target).attr('name'): $(event.target).val() });
//   }

});