FallRecipes.Views.Carousel = FallRecipes.View.extend({
  tagName: "div",
  className: "carousel",
  initialize: function (options) {
    this.items = options.items || new Array();
    this.itemTemplate = options.itemTemplate;
  },
  render: function () {
    var strings = [];
    var view = this;
    var i = 0;
    this.items.forEach(function (item) {
      strings.push('<input id='+i+' type="radio"><label for="'+i+'">');
      strings.push(view.itemTemplate({ model: item }));
      strings.push('</label>');
      i++;
    });

    this.$el.html(strings.join(''));

    return this;
  }
});