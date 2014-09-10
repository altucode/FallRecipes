FallRecipes.Views.RecipeShow = Backbone.View.extend({
  template: JST["recipes/recipe"],
  className: 'recipe',
  events: {
    'blur .input': 'updateAttrs',
    'click .save': 'update'
  },
  initialize: function () {
    this.listenTo(this.model, "add remove change", this.render);
  },
  render: function () {
    if (this.model && this.model.get('editable')) {
      this.$el.addClass('editable');
    }
    var content = this.template({ recipe: this.model });
    this.$el.html(content);
    this.$el.children('.ingredient-box').append(this.ingredientView().render().$el);
    this.$el.children('.directions-box').append(this.directionView().render().$el);
    this.$el.find('.expander .content').append(this.reviewView().render().$el);
    this.$el.find('.photo-frame').append(this.photoView().render().$el);

    this.delegateEvents();

    return this;
  },
  update: function(event) {
    this.model.update();
  },
  photoView: function() {
    return this._photoView ||
    (this._photoView = new FallRecipes.Views.Carousel({
      itemTemplate: JST['photo'],
      collection: this.model.photos()
    }));
  },
  ingredientView: function() {
    return this._ingredientView ||
      (this._ingredientView = new FallRecipes.Views.ListView({
        itemAttrs: {
          recipe_id: this.model.id
        },
        editable: true,
        itemView: FallRecipes.Views.Ingredient,
        collection: this.model.ingredients()
      }));
  },
  directionView: function() {
    return this._directionView ||
      (this._directionView = new FallRecipes.Views.ListView({
        itemAttrs: {
          recipe_id: this.model.id,
          body: '-Placeholder-'
        },
        editable: true,
        itemTemplate: JST['direction'],
        itemClass: 'direction',
        collection: this.model.directions()
      }));
  },
  reviewView: function() {
    return this._reviewView ||
      (this._reviewView = new FallRecipes.Views.ListView({
        itemTemplate: JST['review'],
        itemClass: 'review',
        collection: this.model.reviews()
      }));

  },
  updateAttrs: function (event) {
    event.preventDefault();
    var hash = {};
    hash[$(event.target).attr('name')] = $(event.target).val();
    this.model.set(hash);
  },


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