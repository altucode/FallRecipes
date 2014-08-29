FallRecipes.Views.ListView = FallRecipes.View.extend({
  tagName: "ul",
  events: {
    'blur .editable .input': 'updateItem',
    'click .editable .delete': 'deleteItem'
  },
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
    var list = this;
    this.collection.forEach(function(model) {
      var subview = new this.itemView({ model: model });
      list.subviews().push(subview);
      list.$el.append(subview.render().$el);
    });

    return this;
  },
  removeItem: function (event) {
    this.collection.get($(event.target).attr('data-id')).destroy();
  },
  updateItem: function (event) {
    var item = this.collection.get($(event.target).attr('data-id'));
    var hash = {};
    hash[$(event.target).attr('name')] = $(event.target).val();
    item.set(hash);
  },



  subviews: function() {
    return this._subviews || (this._subviews = []);
  }
});