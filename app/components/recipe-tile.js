import Ember from 'ember';

export default Ember.Component.extend({

  drinkName: Ember.computed( function( ) {
    return this.get('drink').name;
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
    return this.get('drink').videos[1].video;
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
    /*
    var response = this.get('sampleResponse');
    var ingredients = [];
    for( var i = 1; i <= 15; i++ ) {
        var ingVarName = "strIngredient" + i.toString( );
        var ingResponseValue = response[ ingVarName ];
        if(ingResponseValue != "" && ingResponseValue != " ") {
          ingredients.push( ingResponseValue );
        }
    }
    return ingredients;
    */
  }),
});