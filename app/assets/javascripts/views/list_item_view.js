FallRecipes.Views.ListItemView = Backbone.View.extend({
  tagName: "li",

  initialize: function (options) {
    this.$el.attr('data-index', options.index);
    this.template = options.template || JST["list_item"];
    this.className = options.className;
  },
  render: function () {
    this.$el.html(this.template({ model: this.model }));

    this.delegateEvents();

    return this;
  }
});