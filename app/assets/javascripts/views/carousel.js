FallRecipes.Views.Carousel = FallRecipes.View.extend({
  tagName: "div",
  className: "carousel",
  initialize: function (options) {
    this.itemTemplate = options.itemTemplate;
  },
  render: function () {
    var strings = [];
    var view = this;
    var i = 0;
    this.collection.forEach(function (item) {
      strings.push('<input id='+i+' type="radio"><label for="'+i+'">');
      strings.push(view.itemTemplate({ model: item, index: i }));
      strings.push('</label>');
      i++;
    });

    this.$el.html(strings.join(''));

    return this;
  }
});