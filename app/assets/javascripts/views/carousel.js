FallRecipes.Views.Carousel = FallRecipes.View.extend({
  tagName: "div",
  className: "carousel",
  initialize: function (options) {
    this.items = options.items || new Array();
    this.itemTemplate = options.itemTemplate;
  },
  render: function () {
    var strings = [];
    
  }
});