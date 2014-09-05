FallRecipes.Views.RecipeSearch = Backbone.View.extend({
  template: JST["recipe_search"],
  itemsTemplate: JST["recipe_table_items"],
  fieldsTemplate: JST["recipe_search_fields"],
  events: {
    "submit form.search" : "submitForm",
    "click recipe-args .delete" : "deleteRecipe",
    "click .ingredient-args .delete" : "deleteIngredient",
    "click tag-args .delete" : "deleteTag",
    "click user-args .delete" : "deleteUser",
    "change .sorter :checkbox" : "sort"
  },
  initialize: function (options) {
    if (options.query && options.query.length > 0) {
      var view = this;
      $.ajax({
        type: 'GET',
        url: "api/recipes",
        contentType: "json",
        data: "criteria[recipe][name]=" + options.query,
        success: function(data) {
          view._log = data.log;
          view._recipes = data.recipes;
          view.render(true);
        },
        error: function(xhr) {
          console.log("error");
          var errors = $.parseJSON(xhr.responseText).errors;
          form.children(".errors").html(errors);
        }
      });
    }
  },

  submitForm: function (event) {
    event.preventDefault();
    var view = this;
    var form = $(event.target).serializeJSON();
    form['old'] = this.log();
    $.ajax({
      type: 'GET',
      url: "api/recipes",
      contentType: "json",
      data: form,
      success: function(data) {
        view._log = data.log;
        delete data.log.recipe;
        view._recipes = data.recipes
        console.log(data);
        view.render(true);
      },
      error: function(xhr) {
        console.log("error");
        var errors = $.parseJSON(xhr.responseText).errors;
        form.children(".errors").html(errors);
      }
    });
  },
  render: function (only_partial) {
    if (!only_partial) {
      var content = this.template({ recipes: this.recipes(), log: this.log() });
      this.$el.html(content);
    }
    this.$el.find(".expander .content").html(this.fieldsTemplate({ log: this.log() }));
    this.$el.find(".recipe-table tbody").html(this.itemsTemplate({ recipes: this.recipes() }));

    return this;
  },
  sort: function(event) {
    this.$el.find("form").submit();
    // this.find(":checkbox").each(function(index, ele) {
//       $(ele).attr()
//     });
  },
  log: function() {
    return this._log || (this._log = {});
  },
  recipes: function() {
    return this._recipes || (this._recipes = []);
  },
  deleteRecipe: function(event) {
    if (this.recipeData().name) {
      var i = this.recipeData().name.indexOf($(event.target).parent().attr('data-id'));
      if (i >= 0) {
        this.recipeData().name.splice(i, 1);
      }
    }
  },
  deleteIngredient: function(event) {
    console.log("DELETE INGREDIENT");
    console.log(this.ingredientData().item_name);
    if (this.ingredientData().item_name) {
      var i = this.ingredientData().item_name.indexOf($(event.target).parent().attr('data-id'));
      if (i >= 0) {
        this.ingredientData().item_name.splice(i, 1);
      }
      $(event.target).parent().remove();
    }
  },
  deleteTag: function(event) {
    if (this.tagData().name) {
      var i = this.tagData().name.indexOf($(event.target).parent().attr('data-id'));
      if (i >= 0) {
        this.tagData().name.splice(i, 1);
      }
    }
  },
  deleteUser: function(event) {
    if (this.userData().username) {
      var i = this.userData().username.indexOf($(event.target).parent().attr('data-id'));
      if (i >= 0) {
        this.userData().username.splice(i, 1);
      }
    }
  },
  recipeData: function() {
    return this.log()['recipe'] || (this.log()['recipe'] = {});
  },
  ingredientData: function() {
    return this.log()['ingredient_types'] || (this.log()['ingredient_types'] = {});
  },
  tagData: function() {
    return this.log()['tags'] || (this.log()['tags'] = {});
  },
  userData: function() {
    return this.log()['user'] || (this.log()['user'] = {});
  }

});