import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service('shopping-cart'),
  KEYWORDS: {
    Quarter: 0.25,
    Quarters: 0.25,
    Halves: 0.5,
    Wedge: 0.125,
    Wheel: 0.125,
    Half: 0.5,
    Twist: 0.1,
    Peel: 0.1,
    Parts: 45,
    Part: 45,
    Slice: 0.125,
    Piece: 0.125,
  },
  getIngredients: Ember.computed( 'shoppingCart.allIngredients', function( ) {
    var ingredients = this.get('shoppingCart').get('allIngredients');
    var result = [];
    for( var i = 0; i < ingredients.length; i++ ) {
      var params = {};
      var foundMatching = false;
      for( var j = 0; j < result.length; j++ ) {
          if( result[ j ]["id"] === ingredients[ i ].ingredient_id ) {
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
        params["id"] = ingredients[ i ].ingredient_id;
        result.pushObject( params );
      }
    }
    for( var r = 0; r < result.length; r++ ) {
      for( var p in this.get("KEYWORDS") ) {
        if( this.get("KEYWORDS").hasOwnProperty(p) ) {
          if( result[r]["of"].includes(p) ) {
            switch( p ) {
              case "Half":
              case "Halves":
              result[r]["amount"] *= this.get("KEYWORDS")[p.toString( )];
              result[r]["of"] = result[r]["of"].replace(/(Half[^\s\\]|Halves)/g, "");
              result[r]["of"] = result[r]["of"].replace(/Peach/g, "Peach(es)")
              break;
              case "Quarter":
              case "Quarters":
              result[r]["amount"] = Math.ceil( result[r]["amount"] * this.get("KEYWORDS")[p.toString( )] );
              result[r]["of"] = result[r]["of"].replace(/(Quarter[^\s\\]|Quarters)/g, "");
              result[r]["of"] = result[r]["of"].replace(/Peach/g, "Peach(es)")
              break;
              case "Slice":
              case "Piece":
              case "Wheel":
              case "Wedge":
              case "Twist":
              case "Peel":
              var wedgeConversion = result[r]["amount"];
              wedgeConversion *= this.get("KEYWORDS")[p.toString( )];
              result[r]["amount"] = Math.ceil( wedgeConversion ).toString( );;
              result[r]["of"] = result[r]["of"].replace(/(Wedge|Wheel|Slice|Piece)/g, "");
              result[r]["of"] = result[r]["of"].replace(/Lime/g, "Lime(s)");
              result[r]["of"] = result[r]["of"].replace(/Lemon/g, "Lemon(s)")
              if(result[r]["of"].includes("Twist")) {
                result[r]["of"] += " (Twist)";
              }
              break;
              case "Part":
              case "Parts":
              var mlAmount = result[r]["amount"] * this.get("KEYWORDS")[p.toString( )];
              result[r]["amount"] /= mlAmount;
              if(mlAmount < 750) {
                result[r]["amount"] = Math.ceil( parseFloat( mlAmount / 750 ) );
                if(result[r]["of"].includes("Juice") || result[r]["of"].includes("Liqueur") || result[r]["of"].includes("Nectar") || result[r]["of"].includes("Puree") ) {
                  result[r]["of"] = result[r]["of"].replace(/(Part[^\s\\]|Part)/g, "bottle(s)");
                  result[r]["of"] += " (" + mlAmount + "ml) " + "(" + ( mlAmount * 0.033814 ).toFixed(2).toString( ) + "oz)";
                } else {
                  result[r]["of"] = result[r]["of"].replace(/(Part[^\s\\]|Part)/g, "fifth(s)");
                }
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
