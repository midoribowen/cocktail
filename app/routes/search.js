import Ember from 'ember';

export default Ember.Route.extend({


  model: function(params) {
    var url = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + params.query;
    var drinkList = [];
    Ember.$.getJSON(url).then(function(response) {
      return response;
    });
  }
});
