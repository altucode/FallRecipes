window.FallRecipes = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new FallRecipes.Routers.Router();
    if (!Backbone.History.started) {
      Backbone.history.start();
    }
  }
};

FallRecipes.Model = Backbone.Model.extend({
  initialize: function(attrs, options) {
    if (attrs.delayUpdate) {
      var model = this;
      this.listenTo(this, 'add change remove', function() { model.changed = true; });
    }
  },
  trash: function() {
    this.set('trash', true);
  },
  set: function(attrs, options) {
    this.dirty = true;
    Backbone.Model.prototype.set.call(this, attrs, options);
  },
  update: function() {
    if (this.get('trash')) {
      this.destroy();
    } else if (this.dirty) {
      Backbone.Model.prototype.save.call(this);
      delete this.dirty;
    }
  }
});


FallRecipes.View = Backbone.View.extend({
  className: function() {
    return this.editable;
  },
  initialize: function(options) {
    if (options.delayUpdate) {
      if (this.model) {
        var m = this.model;
        this.listenTo(this.model, 'add change remove', function() { m.changed = true; });
      }
      if (this.collection) {
        var c = this.collection;
        this.listenTo(this.model, 'add change remove', function() { m.changed = true; });
      }
    } else {
      if (this.model) {
        var m = this.model;
        this.listenTo(this.model, 'add change remove', this.render);
      }
      if (this.collection) {
        var c = this.collection;
        this.listenTo(this.model, 'add change remove', this.render);
      }
    }
  }
});

String.prototype.toTitleCase = function() {
  var i, j, str, lowers, uppers;
  str = this.replace('_', ' ').replace(/([^\W_]+[^\s-]*) */g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

  // Certain minor words should be left lowercase unless
  // they are the first or last words in the string
  lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
  'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
  for (i = 0, j = lowers.length; i < j; i++)
    str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
      function(txt) {
        return txt.toLowerCase();
      });

  // Certain words such as initialisms or acronyms should be left uppercase
  uppers = ['Id', 'Tv'];
  for (i = 0, j = uppers.length; i < j; i++)
     str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'),
       uppers[i].toUpperCase());

  return str;
};

String.prototype.fromRat = function() {
  var arr = this.split('/', 2).filter(Boolean);
  return arr.length > 1 ? parseFloat(arr[0]) / parseFloat(arr[1]) : parseFloat(arr[0]);
};

Number.prototype.toRat = function(proper) {
    var tolerance = 1.0E-6;
    var h1=1; var h2=0;
    var k1=0; var k2=1;
    var b = this;
    do {
        var a = Math.floor(b);
        var aux = h1; h1 = a*h1+h2; h2 = aux;
        aux = k1; k1 = a*k1+k2; k2 = aux;
        b = 1/(b-a);
    } while (Math.abs(this-h1/k1) > this*tolerance);

    if (k1 > 1) {
      if (proper && h1 >= k1) {
        return Math.floor(this)+' '+(h1-(Math.floor(this)*k1))+'/'+k1;
      } else {
        return h1+"/"+k1;
      }
    } else {
      return h1;
    }
};

Number.prototype.pad = function(width, c) {
  c = c || '0';
  var str = this.toString();
  return str.length >= width ? str : new Array(width - str.length + 1).join(c) + str;
};