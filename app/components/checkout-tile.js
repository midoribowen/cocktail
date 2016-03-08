import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service('shopping-cart'),
  KEYWORDS: {
    Halves: 0.5,
    Wedge: 0.125,
    Wheel: 0.125,
    Half: 0.5,
    Twist: 0.1,
    Parts: 45,
    Part: 45,
  },
  getIngredients: Ember.computed( 'shoppingCart.allIngredients', function( ) {
    var ingredients = this.get('shoppingCart').get('allIngredients');
    var result = [];
    for( var i = 0; i < ingredients.length; i++ ) {
      var params = {};
      var foundMatching = false;
      for( var j = 0; j < result.length; j++ ) {
          if( result[ j ]["of"] === ingredients[ i ].newString ) {
            if( ingredients[ i ].amount ) {
              result[ j ]["amount"] += ingredients[ i ].amount;
            }
            foundMatching = true;
          }
      }
      if(!foundMatching) {
        if( ingredients[ i ].amount > 0 ) {
          params["amount"] = ingredients[ i ].amount;
        }
        params["of"] = ingredients[ i ].newString;
        result.pushObject( params );
      }
    }
    for( var r = 0; r < result.length; r++ ) {
      for( var p in this.get("KEYWORDS") ) {
        if( this.get("KEYWORDS").hasOwnProperty(p) ) {
          if( result[r]["of"].includes(p) ) {
            switch( p ) {
              case "Halves":
              result[r]["amount"] *= this.get("KEYWORDS")[p.toString( )];
              result[r]["of"] = result[r]["of"].replace(/Halves/g, "");
              result[r]["of"] = result[r]["of"].replace(/Peach/g, "Peach(es)")
              break;
              case "Wheel":
              result[r]["of"] = result[r]["of"].replace(/Wheel/g, "");
              case "Wedge":
              result[r]["amount"] = Math.ceil( result[r]["amount"] );
              result[r]["of"] = result[r]["of"].replace(/Wedge/g, "");
              result[r]["of"] = result[r]["of"].replace(/Lime/g, "Lime(s)");
              result[r]["of"] = result[r]["of"].replace(/Lemon/g, "Lemon(s)")
              break;
              case "Half":
              break;
              case "Twist":
              break;
              case "Part":
              case "Parts":
              var mlAmount = result[r]["amount"] * this.get("KEYWORDS")[p.toString( )];
              result[r]["amount"] /= mlAmount;
              if(mlAmount < 750) {
                result[r]["amount"] = Math.ceil( parseFloat( mlAmount / 750 ) );
                result[r]["of"] = result[r]["of"].replace(/(Part[^\s\\]|Part)/g, "fifth(s)");
              }
              else {
                result[r]["amount"] = Math.ceil( parseFloat( mlAmount / 1500 ) );
                result[r]["of"] = result[r]["of"].replace(/(Part[^\s\\]|Part)/g, "handle(s)");
              }
              break;
            }
          }
        }
      }
    }
    return result;
  }),

  actions: {
    removeFromCart(drink) {
      this.get('shoppingCart').removeFromCart(drink);
    },
  }
});
// Constants for size of bottles in ml
// constants for size of fruit containers, in whole numbers

//KEY WORDS
// Halves
// Half
// Pinch
//

// mulitply "parts" by 45 (ml)
// replace parts with bottle (750ml minimum) (if amount < 750, parts = 1 fifth)
                                            //(if amount > 1500, parts = 1 handle)
