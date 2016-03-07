import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    search(query) {
      var params = {
        search_query: query,
      }
      var newSearch = this.store.createRecord('searches', params);
      newSearch.save();
      this.transitionTo('search', query);
    }
  }
});
