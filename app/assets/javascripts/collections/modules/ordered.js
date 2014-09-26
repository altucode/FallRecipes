var Ordered = {
  comparator: 'ord',

  _remove: function (model, options) {
    for (var j = model.get('ord') + 1; j < this.length; ++j) {
      this.at(j).set('ord', j - 1);
      this.at(j).save();
    }
    return false;
  }

  _add: function(models, options) {
    if (!model.has('ord')) {
      model.set('ord', this.length);
      return true;
    }
    return false;
  },

  insert: function (model, i) {
    model.set('ord', i);
    while (i < this.length) {
      var tmp = this.at(i);
      tmp.set('ord', ++i);
      tmp.save();
    }
    this.add(model);
    model.save();
  }
};