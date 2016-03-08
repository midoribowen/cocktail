import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    search(query) {
      var cleanQuery = query.replace(/([^a-zA-Z0-9])/g, " ");
      var params = {
        search_query: cleanQuery,
      }
      var newSearch = this.store.createRecord('searches', params);
      newSearch.save();
      this.transitionTo('search', cleanQuery);
    }
  }
});
