import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    search(query) {
      this.transitionTo('search', query);
    }
  }
});
