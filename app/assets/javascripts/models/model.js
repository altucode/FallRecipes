FallRecipes.Model = Backbone.Model.extend({
  objects: [],
  parse: function (response) {
    response.created_at && (response.created_at = new Date(response.created_at));
    for (var name in this.objects) {
      var obj = response[name];
      if (obj) {
        if (this[name]['set']) {
          _.result(this, name).set(obj, { parse: true });
        } else {
          this['_' + name] = obj;
        }
        delete response[name];
      }
    }
    return response;
  }
},{
  extend: function(props) {
    var derived = Backbone.Model.extend.call(this, props);
    for (var name in derived.prototype.objects) {
      var type = derived.prototype.objects[name].type;
      var params = derived.prototype.objects[name].params;
      derived.prototype[name] = function() {
        return this['_' + name] || {
          
        }(this['_' + name] = new type()
      };
    }
    delete derived.prototype.objects;

    return derived;
  }
});