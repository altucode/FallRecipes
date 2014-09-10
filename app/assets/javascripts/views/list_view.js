FallRecipes.Views.ListView = FallRecipes.View.extend({
  tagName: "div",
  template: JST["list_view"],
  events: {
    'click #add': 'addNew',
    'click #clear': 'clearAll',
    'blur .input': 'updateItem',
    'click .delete': 'removeItem'
  },
  initialize: function (options) {
    this.itemAttrs = options.itemAttrs || {};
    this.itemView = options.itemView || FallRecipes.Views.ListItemView;
    this.itemTemplate = options.itemTemplate || JST['list_item']
    this.itemClass = options.itemClass || this.itemView.prototype.className;
    this.renderCondition = options.renderCondition || function (model) { return !model.get('trash'); };
    this.header = options.header;
    this.editable = options.editable;

    this.listenTo(this.collection, "add change remove", this.render);
  },

  remove: function() {
    Backbone.View.prototype.remove.call(this);
    this.subviews().forEach(function(subview) {
      subview.remove();
    });
  },

  render: function() {
    var content = this.template({ header: this.header, editable: this.editable });
    var ul = $('<ul></ul>');
    var list = this;
    var i = 0;
    this.collection.forEach(function(model) {
      if (list.renderCondition(model)) {
        var subview = new list.itemView({ template: list.itemTemplate, className: list.itemClass, model: model, index: i });
        list.subviews().push(subview);
        ul.append(subview.render().$el);
      }
      ++i;
    });
    this.$el.html(content);
    this.$el.append(ul);

    this.delegateEvents();

    return this;
  },
  addItem: function (item) {
    item.set('ord', this.collection.length);
    this.collection.add(item);
  },
  addNew: function (event) {
    var item = new this.collection.model(this.itemAttrs);
    this.addItem(item);
  },
  clearAll: function (event) {
    this.collection.reset();
    this.render();
  },
  removeItem: function (event) {
    var item = this.collection.at($(event.target).parents('li').attr('data-index'));
    if (item.isNew()) {
      this.collection.remove(item);
    } else {
      console.log(item);
      item.trash();
    }
  },
  updateItem: function (event) {
    event.preventDefault();
    var item = this.collection.at($(event.target).parents('li').attr('data-index'));
    var hash = {};
    hash[$(event.target).attr('name')] = $(event.target).val();
    item.set(hash);
  },




  subviews: function() {
    return this._subviews || (this._subviews = []);
  }
});