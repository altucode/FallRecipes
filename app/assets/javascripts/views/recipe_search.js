FallRecipes.View.RecipeSearch = Backbone.View.extend({
  template: ["recipe_search"],
  events: {
    "submit form.search" : "submitForm"
  },

  submitForm: function (event) {
    event.preventDefault();
    var form = $(event.target);
    $.ajax({
      type: 'GET',
      url: "api/recipes/search",
      data: $(this).serialize(),
      success: this.updateSearch.bind(this),
      error: function(xhr) {
        console.log("error");
        var errors = $.parseJSON(xhr.responseText).errors;
        form.children(".errors").html(errors);
      }
    });
  },
  updateFormData: function(data) {
    var view = this;
    data.keys().forEach(function (type) {
      if (typeof data[type] === typeof Object) {
        data[type].keys().forEach(function (field) {
          var params = data[type][field].match(/(?:[^\s"]+|"[^"]*")+/g);
          params.forEach(function(param) {
            if (!view[type]()[field]) {
              view[type]()[field] = [];
            }
            if (view[type]()[field].indexOf(param) < 0) {
              view[type]()[field].push(param);
            }
          });
          data[type][field] = view[type]()[field];
        });
      } else {
        view[type] = data[type];
      }
    });
  },
  updateSearch: function (response) {

  },
  formData: function() {
    return this._formData || (this._formData = {});
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