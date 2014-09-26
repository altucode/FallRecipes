FallRecipes.View = Backbone.View.extend({
  attributes: {},
  className: function() { return this._className.join(' '); },
  _className: [],
  templateData: function() {
    var hash = {};
    for (var i = 0; i < this._templateData.length; ++i) {
      hash[this._templateData[i]] = this[_.result(this, this._templateData[i])];
    }
    return hash;
  }
  _templateData: [
    'model'
  ],
  initialize: function(options) {
    if (options) {
      options.attributes && (_.extend(this.attributes, options.attributes));
      options._className && (this._className.push(options._className));
      options.tagName && (this.tagName = options.tagName);
      options.template && (this.template = options.template);
      options.parent && (this.parent = options.parent);
    }
    Backbone.View.prototype.initialize.call(this, options);
    this.model && this.listenTo(this.model, "change", this.render);
  }
  //Not for general use. Create a new view instead.
  setModel: function(model) {
    this.remove();
    this.model = model;
    this.listenTo(this.model, "change", this.render);
    this.render();
  }
  render: function() {
    for (var attr in this.attributes) {
      this.$el.attr(attr, _.result(this, this.attributes[attr]) || this.attributes[attr]);
    }
    if (this.template) {
      var content = this.template(this.templateData());
      this.$el.html(content);
    }
    this.delegateEvents();
    return this;
  }
},{
  extend: function (props, mods) {
    var derived = Backbone.View.extend.call(this, props);
    if (mods) {
      for (var i = 0; i < mods.length; ++i) {
        for (var prop in mods[i]) {
          if (derived.hasOwnProperty(prop)) {
            switch(typeof mods[i][prop]) {
            case 'function':
              (derived.prototype[prop] || (derived.prototype[prop] = [])).push(mods[i][prop]);
              break;
            case 'object':
              if (_.isArray(mods[i][prop])) {
                derived.prototype[prop] = _.union(derived.prototype[prop], mods[i][prop]);
              } else {
                _.extend(derived.prototype[prop], mods[i][prop]);
              }
              break;
            default:
              if (derived.prototype[prop] instanceof Array) {
                derived.prototype[prop].push(mods[i][prop]);
              } else {
                derived.prototype[prop] = mods[i][prop];
              }
            }
          } else {
            derived.prototype[prop] = mods[i][prop];
          }
        }
      }
    }
    return derived;
  }
});