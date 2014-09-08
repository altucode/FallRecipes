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


FallRecipes.View = Backbone.View.extend({
  className: function() {
    return this.editable;
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

Number.prototype.pad = function(width, c) {
  c = c || '0';
  var str = this.toString();
  return str.length >= width ? str : new Array(width - str.length + 1).join(c) + str;
};