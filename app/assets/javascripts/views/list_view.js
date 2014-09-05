FallRecipes.Views.ListView = FallRecipes.View.extend({
  tagName: "ul",
  events: {
    'blur .editable .input': 'updateItem',
    'click .editable .delete': 'deleteItem'
  },
  initialize: function (options) {
    this.itemView = options.itemView || FallRecipes.Views.ListItemView;
    this.itemTemplate = options.itemTemplate || JST['list_item']
    this.listenTo(this.collection, "add change remove", this.render);
    console.log(this.itemTemplate);
  },

  remove: function() {
    Backbone.View.prototype.remove.call(this);
    this.subviews().forEach(function(subview) {
      subview.remove();
    });
  },

  render: function() {
    this.remove();
    var list = this;
    this.collection.forEach(function(model) {
      var subview = new list.itemView({ template: list.itemTemplate, model: model });
      list.subviews().push(subview);
      list.$el.append(subview.render().$el);
    });

    return this;
  },
  addItem: function (event) {
    this.collection.add(new this.collection.model());
  },
  removeItem: function (event) {
    this.collection.at($(event.target).attr('data-index')).destroy();
  },
  updateItem: function (event) {
    var item = this.collection.at($(event.target).attr('data-index'));
    var hash = {};
    hash[$(event.target).attr('name')] = $(event.target).val();
    item.set(hash);
  },




  subviews: function() {
    return this._subviews || (this._subviews = []);
  }
});