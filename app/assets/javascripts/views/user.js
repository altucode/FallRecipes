FallRecipes.Views.User = FallRecipes.View.extend({
  template: JST['users/show'],
  className: "user",
  initialize: function() {
    this.listenTo(this.model, "add change remove", this.render);
  },
  render: function() {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  }
});