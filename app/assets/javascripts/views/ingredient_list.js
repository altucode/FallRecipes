FallRecipes.Views.IngredientList = FallRecipes.Views.ListView.extend({
  events: {
    "blur .editable .input": "updateItem",
    "click .editable .delete": "deleteItem"
  },

  updateItem: function(event) {

  },

  deleteItem: function(event) {
    
  }
});