var Droppable = {
  events: {
    'dragover': 'dragOver',
    'dragenter': 'toggleDragOver',
    'dragleave': 'toggleDragOver',
    'drop': '_drop'
  },
  dragOver: function(event) {
    return !this.isDropTarget(event);
  },
  toggleDragOver: function (event) {
    if (this.isDropTarget(event)) {
      this.$el.toggleClass('dragover');
      return false;
    }
  },
  isDropTarget: function (event) {
    if (event.dataTransfer.types.indexOf(this.model.name + '/id') >= 0) {
      return true;
    } else if (this.collection) {
      return event.dataTransfer.types.indexOf(this.collection.model.name + '/id') >= 0;
    } else {
      return false;
    }
  },
  _drop: function(event) {
    this.$el.removeClass('dragover');
    return this.drop(event);
  }
};