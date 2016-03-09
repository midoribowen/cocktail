import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  opened: false,
  killButton: Ember.computed('shoppingCart.recipes', function() {
    console.log (this.get('shoppingCart').containsDrink(this.get('drink')));
    return this.get('shoppingCart').containsDrink(this.get('drink'));
    // console.log (this.get('shoppingCart.recipes').contains(this.get('drink')));
    // return this.get('shoppingCart').get('recipes').contains(this.get('drink'));
  }),

  drinkName: Ember.computed( function( ) {
    return this.get('drink').name;
  }),
  drinkId: Ember.computed( function( ) {
    return this.get('drink').id;
  }),
  drinkCategory: Ember.computed( function( ) {
    return this.get('drink').story;
  }),
  drinkAlcoholic: Ember.computed( function( ) {
    return( this.get('drink').isAlcoholic ) ? "Alcoholic" : "Non Alcoholic";
  }),
  drinkInstructions: Ember.computed( function ( ) {
    var r = this.get('drink').descriptionPlain.split( "." );
    r.pop( );
    return r;
  }),
  drinkTastes: Ember.computed( function( ) {
    return this.get('drink').tastes;
  }),
  drinkVideo: Ember.computed( function( ) {
    if(this.get('drink').videos !== undefined) {
      var vidLinks = this.get('drink').videos;
      var youtubeLink = "";
      for( var i = 0; i < vidLinks.length; i++ ) {
        if( vidLinks[ i ].type == "youtube" ) {
          youtubeLink = vidLinks[ i ].video;
        }
      }
    }
    return youtubeLink;
  }),
  drinkTools: Ember.computed( function( ) {
    return this.get('drink').tools;
  }),
  drinkServedIn: Ember.computed( function( ) {
    return this.get('drink').servedIn.text;
  }),
  drinkOccasions: Ember.computed( function( ) {
    return this.get('drink').occasions;
  }),
  drinkIngredients: Ember.computed( function( ) {
    return this.get('drink').ingredients;
  }),

    actions: {
      addToCart() {
        var drink = {
          name: this.get('drinkName'),
          ingredients: this.get('drinkIngredients')
        };
        this.get('shoppingCart').addToCart(drink);
      },

      open() {
        this.set('opened', true);
      },

      close() {
        this.set('opened', false);
      },
    }
});
