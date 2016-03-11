import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  resultList: Ember.computed.alias('shoppingCart.result')

});
