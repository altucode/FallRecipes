FallRecipes.Collection = Backbone.Collection.extend({

  initialize: function (models, options) {
    if (options) {
      options.owner && (this.owner = options.owner);
      this.model = options.model || FallRecipes.Model;
      options.url && (this.url = options.url);
    }
    if (this._initialize) {
      for (var i = 0; i < this._initialize.length; ++i) {
        this._initialize[i](models, options);
      }
    }
    Backbone.Collection.prototype.initialize.call(this, models, options);
  },
  add: function (models, options) {
    if (! (models instanceof Array)) { models = [models]; }
    for (var i = 0; i < models.length; ++i) {
      var save = false;
      for (var j = 0; j < this._add.length; ++j) {
        save = save || this._add[0].call(this, model[i], options);
      }
      if (save) { models[i].save(); }
    }
    Backbone.Collection.prototype.add.call(this, models, options);
  },

  _add: [function (model, options) {
    if (this.owner) {
      model.set(this.owner.name + '_id', this.owner.id);
      return true;
    }
    return false;
  }],

  remove: function (models, options) {
    if (! (models instanceof Array)) { models = [models]; }
    for (var i = 0; i < models.length; ++i) {
      var save = false;
      for (var j = 0; j < this._remove.length; ++j) {
        save = save || this._remove[0].call(this, model[i], options);
      }
      if (save) { models[i].save(); }
    }
    Backbone.Collection.prototype.remove.call(this, models, options);
  },

  _remove: function(model, options) {
    return false;
  },

  update: function() {
    this.forEach(function(model) {
      model.update();
    });
  },

  getOrFetch: function (id) {
    var collection = this;
    var model;
    if (model = this.get(id)) {
      model.fetch();
    } else {
      model = new this.model({ id: id });
      collection = this;
      model.fetch({
        success: function() { collection.add(model); }
      });
    }

    return model;
  }
},{
  extend: function (props, mods) {
    var derived = Backbone.View.extend.call(this, props);
    if (mods) {
      for (var i = 0; i < mods.length; ++i) {
        for (var prop in mods[i]) {
          if (derived.hasOwnProperty(prop) && prop[0] === '_') {
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