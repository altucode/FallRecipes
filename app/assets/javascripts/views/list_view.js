FallRecipes.Views.ListView = FallRecipes.View.extend({
  tagName: "div",
  template: JST["list_view"],
  events: {
    'click #add': 'addNew',
    'click #clear': 'clearAll',
    'blur li .input.free:not([type=checkbox])': 'updateItem',
    'click li .input.free[type=checkbox]': 'updateItem',
    'click li .save': 'saveItem',
    'click li .delete': 'deleteItem'
  },
  itemAttrs: {
    'data-cid': function() { return this.model.cid; }
  },
  initialize: function (options) {
    this.itemAttrs = options.itemAttrs;
    this.itemView = options.itemView || FallRecipes.Views.ListItemView;
    this.itemTemplate = options.itemTemplate || JST['list_item']
    this.itemClass = options.itemClass || this.itemView.prototype.className;

    this.selector = options.selector || 'ul';

    this.listenTo(this.collection, "add change remove", this.render);

    FallRecipes.View.prototype.initialize.call(this, options);
  },

  remove: function() {
    this.subviews().forEach(function(subview) {
      subview.remove();
    });
    Backbone.View.prototype.remove.call(this);
  },

  render: function() {
    FallRecipes.View.prototype.render.call(this);
    var ele = this.$el.find(_.result(this, 'selector'));
    ele.empty();
    var list = this;
    var i = 0;
    for (var i = 0; i < this.collection.length; ++i) {
      var subview = new (_.result(this, 'itemView'))({
        attributes: this.itemAttrs,
        template: _.result(this, 'itemTemplate'),
        _className: _.result(this, 'itemClass'),
        model: this.collection[i]
      });
      this.subviews().push(subview);
      ele.append(subview.render().$el);
    }

    return this;
  },
  addNew: function (event) {
    var item = new this.collection.model();
    this.collection.add(item);
  },
  clearAll: function (event) {
    this.collection.reset();
    this.render();
  },
  deleteItem: function (event) {
    event.stopPropagation();
    var item = this.collection.get($(event.target).parents('li').attr('data-cid'));
    this.collection.remove(item);
    item.destroy();
    return false;
  },
  saveItem: function(event) {
    event.stopPropagation();
    var item = this.collection.get($(event.target).parents('li').attr('data-cid'));
    var siblings = $(event.target).siblings('.input:not([type=hidden])');
    var hash = {};
    siblings.each(function(i, e) {
      hash[e.name] = e.type == 'checkbox' ? e.checked : e.value;
    });
    item.set(hash);
    item.save();
  },
  updateItem: function (event) {
    event.stopPropagation();
    var item = this.collection.get($(event.target).parents('li').attr('data-cid'));
    var hash = {};
    hash[event.target.name] = event.target.type == 'checkbox' ? event.target.checked : event.target.value;
    item.set(hash);
    item.save();
  },




  subviews: function() {
    return this._subviews || (this._subviews = []);
  }
});