import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  stuffInCart: Ember.computed('shoppingCart.allIngredients', function() {
    return this.get("shoppingCart.allIngredients").length > 0;
  }),

  actions: {
    getTotalsFromList( ) {
      var totals = {};
      var checkOutList = this.get('shoppingCart').allIngredients;
      for( var i = 0; i < checkOutList.length; i++ ) {
        var parsedServing = parseInt( checkOutList[ i ][ 0 ] );
        var id = checkOutList[ i ].id.toString( );
        totals[ id ] = (totals[ id ] === undefined) ? parsedServing : totals[ id ] + parsedServing;
      }
      return totals;
    }
  }
});
