import Ember from 'ember';

export default Ember.Component.extend({
  sampleResponse: {
                    idDrink: "13060",
                    strDrink: "Margarita",
                    strCategory: "Ordinary Drink",
                    strAlcoholic: "Alcoholic",
                    strGlass: "Cocktail glass",
                    strInstructions: "Rub rim of cocktail glass with lime juice, dip rim in salt. Shake all ingredients with ice, strain into the salt-rimmed glass, and serve.",
                    strDrinkThumb: "http://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
                    strIngredient1: "Tequila",
                    strIngredient2: "Triple sec",
                    strIngredient3: "Lime juice",
                    strIngredient4: "Salt",
                    strIngredient5: "",
                    strIngredient6: "",
                    strIngredient7: "",
                    strIngredient8: "",
                    strIngredient9: "",
                    strIngredient10: "",
                    strIngredient11: "",
                    strIngredient12: "",
                    strIngredient13: "",
                    strIngredient14: "",
                    strIngredient15: "",
                    strMeasure1: "1 1/2 oz ",
                    strMeasure2: "1/2 oz ",
                    strMeasure3: "1 oz ",
                    strMeasure4: " ",
                    strMeasure5: " ",
                    strMeasure6: " ",
                    strMeasure7: " ",
                    strMeasure8: " ",
                    strMeasure9: " ",
                    strMeasure10: "",
                    strMeasure11: "",
                    strMeasure12: "",
                    strMeasure13: "",
                    strMeasure14: "",
                    strMeasure15: "",
                    dateModified: "2015-08-18 14:42:59"
                 },

  drinkName: Ember.computed( function( ) {
    var response = this.get('sampleResponse');
    return response.strDrink;
  }),
  drinkCategory: Ember.computed( function( ) {
    var response = this.get('sampleResponse');
    return response.strCategory;
  }),
  drinkAlcoholic: Ember.computed( function( ) {
    var response = this.get('sampleResponse');
    return response.strAlcoholic;
  }),
  drinkInstructions: Ember.computed( function ( ) {
    var response = this.get('sampleResponse');
    return response.strInstructions;
  }),
  drinkMeasures: Ember.computed( function( ) {
    var response = this.get('sampleResponse');
    var measures = [];
    for( var m = 1; m <= 15; m++ ) {
      var measureVarName = "strMeasure" + m.toString( );
      var measureResponseValue = response[ measureVarName ];
      if(measureResponseValue != " " && measureResponseValue != "") {
        var splitMeasureResponse = measureResponseValue.split( " " );
        var measurement = [];
        for( var s = 0; s < splitMeasureResponse.length; s++ ) {
          if(splitMeasureResponse[s] !== "") {
            var measureAsNum = parseFloat(splitMeasureResponse[s]);
            if(splitMeasureResponse[s] == "1/2") {
              measurement.push("0.5");
            }
            else if(!isNaN(measureAsNum)) {
              measurement.push(measureAsNum.toString( ));
            }
            else
            {
              measurement.push(splitMeasureResponse[s]);
            }
          }
          else // Found end of this measure, calculate it as a whole.
          {
            var measureTotalAmount = 0;
            var measureAs = "";
            for( var g = 0; g < measurement.length; g++ ) {
              measureAsNum = parseFloat(measurement[g]);
              if( measurement[g] === "oz"){
                measureAs = measurement[g];
              }
              else if(!isNaN(measureAsNum)) {
                measureTotalAmount += measureAsNum;
              }
            }
            measures.push( measureTotalAmount + " " + measureAs);
            measureAs = "";
            measureTotalAmount = "";
          }
        }
      }
    }
    return measures;
  }),
  drinkIngredients: Ember.computed( function( ) {
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
  }),
});
