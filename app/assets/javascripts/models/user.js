FallRecipes.Models.User = Backbone.Model.extend({
  name: 'user',
  urlRoot: 'api/users',
  objects: {
    recipes: {
      type: FallRecipes.Collection,
      props: { url: 'api/recipes' }
    },
    favorites: {
      type: FallRecipes.Collection,
      props: { url: 'api/subscriptions' }
    },
    follows: {
      type: FallRecipes.Collection,
      props: { url: 'api/subscriptions' }
    },
    followers: {
      type: FallRecipes.Collection,
      props: { url: 'api/subscriptions' }
    }
  }
});