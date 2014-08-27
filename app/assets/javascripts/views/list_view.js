FallRecipes.Views.ListView = Backbone.View.extend({
  tagName: "ul",
  initialize: function () {
    this.listenTo(this.collection, "add change remove", this.render);
  },

  remove: function() {
    this.subview().forEach(function(subview) {
      subview.remove();
    });
    BackBone.View.prototype.remove.call(this);
  },

  render: function() {
    var content = this.template({ model: this.model, collection: this.collection });
    this.$el.html(content);
    var that = this;
    this.collection.forEach(function(model)) {
      var subview = new this.itemView({ model: model });
      that.subviews().push(subview);
      that.$("ul").append(subview.render().$el);
    }

    return this;
  },



  subviews: function() {
    return this._subviews || (this._subviews = []);
  }
});