var Draggable = {
  events: {
    'dragstart': 'dragStart',
  },
  initialize: function(options) {
    this.$el.attr('draggable', true);
  },
  dragStart: function(event) {
    var props = this.dragProps();
    event.dataTransfer.effectAllowed = 'move';
    for (var i = 0; i < props.length; ++i) {
      event.dataTransfer.setData(this.model.name + '/' + props[i], this.model.get(props[i]));
    }
  },
  dragProps: function() {
    return [];
  }
};