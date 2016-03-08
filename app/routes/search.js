import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = "http://addb.absolutdrinks.com/quickSearch/drinks/" + params.query + "/?apiKey=589ac88002b74f98960a514f275e89a6";
    return Ember.$.ajax(url, {
      dataType: 'jsonp',
      jsonpCallback: 'mycallback'
    }).then(function(response) {
      return response.result;
    });
  },

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
