FallRecipes.Views.RecipeSearch = Backbone.View.extend({
  template: JST["recipe_search"],
  events: {
    "submit form.search" : "submitForm",
    "click recipe-args .delete" : "deleteRecipe",
    "click ingredient-args .delete" : "deleteIngredient",
    "click tag-args .delete" : "deleteTag",
    "click user-args .delete" : "deleteUser",
    "click :checkbox" : "sort"
  },
  initialize: function () {
  },

  submitForm: function (event) {
    event.preventDefault();
    var view = this;
    var form = $(event.target);
    $.ajax({
      type: 'GET',
      url: "api/recipes/",
      data: form.serialize(),
      success: function(data) {
        view._log = data;
        console.log(data);
        view.render();
      },
      error: function(xhr) {
        console.log("error");
        var errors = $.parseJSON(xhr.responseText).errors;
        form.children(".errors").html(errors);
      }
    });
  },
  render: function () {
    var content = this.template({ log: this._log });
    this.$el.html(content);

    return this;
  },
  sort: function(event) {
    event.target.prop('checked', !event.target.prop('checked'));
    this.find("form").submit();
    // this.find(":checkbox").each(function(index, ele) {
//       $(ele).attr()
//     });
  },
  updateSearch: function (response) {

  },
  formData: function() {
    return this._formData || (this._formData = {});
  },
  recipes: function() {
    return this._recipes || (this._recipes = new FallRecipes.Collection({
      model: FallRecipes.Models.Recipe
    }));
  },
  names: function() {
    return this.formData()['names'] || (this.formData()['names'] = []);
  },
  users: function() {
    return this.formData()['user'] || (this.formData()['user'] = []);
  },
  ingredients: function () {
    return this.formData()['ingredients'] || (this.formData()['ingredients'] = []);
  },
  sortBy: function() {
    return this.formData()['sort'] || (this.formData()['sort'] = 'id');
  },
  asc: function() {
    return this.formData()['asc'] || (this.formData()['asc'] = false);
  }

});