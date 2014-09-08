FallRecipes.Views.ListView = FallRecipes.View.extend({
  tagName: "div",
  template: JST["list_view"],
  events: {
    'click .add': 'addNew',
    'blur .input': 'updateItem',
    'click .editable .delete': 'deleteItem'
  },
  initialize: function (options) {
    this.itemView = options.itemView || FallRecipes.Views.ListItemView;
    this.itemTemplate = options.itemTemplate || JST['list_item']
    this.itemClass = options.itemClass || this.itemView.prototype.className;
    this.header = options.header;

    this.listenTo(this.collection, "add change remove", this.render);
  },

  remove: function() {
    Backbone.View.prototype.remove.call(this);
    this.subviews().forEach(function(subview) {
      subview.remove();
    });
  },

  render: function() {
    console.log("RENDER");
    var content = this.template({ header: this.header });
    var ul = $('<ul></ul>');
    var list = this;
    var i = 0;
    this.collection.forEach(function(model) {
      var subview = new list.itemView({ template: list.itemTemplate, className: list.itemClass, model: model, index: i });
      list.subviews().push(subview);
      ul.append(subview.render().$el);
      ++i;
    });
    this.$el.html(content);
    this.$el.append(ul);

    this.delegateEvents();

    return this;
  },
  addItem: function (item) {
    this.collection.add(item);
  },
  addNew: function (event) {
    this.collection.add(new this.collection.model({ ord: this.collection.length }));
  },
  removeItem: function (event) {
    this.collection.at($(event.target).attr('data-index')).destroy();
  },
  updateItem: function (event) {
    console.log("UPDATE");
    var item = this.collection.at($(event.target).parent().attr('data-index'));
    var hash = {};
    hash[$(event.target).attr('name')] = $(event.target).val();
    item.set(hash);
  },




  subviews: function() {
    return this._subviews || (this._subviews = []);
  }
});