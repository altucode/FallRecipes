FallRecipes.Views.ListItemView = Backbone.View.extend({
  tagName: "li",

  initialize: function (options) {
    this.propName = options.propName || "name";
    this.template = options.template || JST["list_item"];
    this.index = options.index;
  },
  render: function () {
    this.$el.html(this.template({ model: this.model, index: this.index }));

    return this;
  }
});