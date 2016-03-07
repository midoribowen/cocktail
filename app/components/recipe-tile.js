import Ember from 'ember';

export default Ember.Component.extend({
  sampleResponse: {
                     "description":"[Fill|Action|fill] a [shaker|Tool|boston-shaker] with [ice cubes|Ingredient|ice-cubes]. [Add|Action|add] all ingredients. [Shake|Action|shake] and [strain|Action|strain] into a chilled [cocktail glass|Glass|cocktail-glass]. [Garnish|Action|garnish] with orange.",
                     "story": "A pink drink served in a Martini glass and called The Cosmopolitan is said to have originated in San Francisco in the 1980s, but it wasn't\r\nuntil 1988--the year Absolut Citron was launched--that the\r\nCosmopolitan as it is known today was created. Bartender Toby Cecchini\r\nadapted the original recipe, using fresh juice, orange liqueur, a\r\nsplash of cranberry, and the first citrus-flavored vodka. The rest is history!",
                     "color": "Pink",
                     "rating":87,
                     "skill":{
                        "id":"beginner",
                        "name":"Beginner",
                        "value":1
                     },
                     "videos":[
                        {
                           "video":"absolut-cosmopolitan.mp4",
                           "type":"assets"
                        },
                        {
                           "video":"pggWEFyT1Ds",
                           "type":"youtube"
                        }
                     ],
                     "isAlcoholic":true,
                     "isCarbonated":false,
                     "isHot": false,
                     "tags":[
                        {
                           "Owner":"apps/225",
                           "Name":"Coll_Citron"
                        },
                        {
                           "Owner":"apps/225",
                           "Name":"Coll_Classic1"
                        },
                        {
                           "Owner":"apps/225",
                           "Name":"Coll_Vodka"
                        },
                        {
                           "Owner":"apps/225",
                           "Name":"drinkspiration"
                        }
                     ],
                     "servedIn":{
                        "id":"cocktail-glass",
                        "text":"Cocktail Glass"
                     },
                     "ingredients":[
                        {
                           "type":"ice",
                           "id":"ice-cubes",
                           "text":"[Ice Cubes]",
                           "textPlain": "Ice Cubes"
                        },
                        {
                           "type":"vodka",
                           "id":"absolut-citron",
                           "text":"2 Parts [ABSOLUT CITRON]",
                           "textPlain": "2 Parts Absolut Citron"
                        },
                        {
                           "type":"spirits-other",
                           "id":"orange-liqueur",
                           "text":"½ Part [Orange Liqueur]",
                           "textPlain": "1 Part Orange Liqueur"

                        },
                        {
                           "type":"mixers",
                           "id":"cranberry-juice",
                           "text":"½ Part [Cranberry Juice]",
                           "textPlain": "½ Part Cranberry Juice"
                        },
                        {
                           "type":"mixers",
                           "id":"lime-juice",
                           "text":"¼ Part [Lime Juice]",
                           "textPlain": "1 Part Lime Juice"
                        },
                        {
                           "type":"fruits",
                           "id":"orange",
                           "text":"1 Twist [Orange]",
                           "textPlain": "1 Twist Orange"
                        }
                     ],
                     "tastes":[
                        {
                           "id":"sweet",
                           "text":"Sweet"
                        },
                        {
                           "id":"fresh",
                           "text":"Fresh"
                        },
                        {
                           "id":"fruity",
                           "text":"Fruity"
                        }
                     ],
                     "occasions":[
                        {
                           "id":"afternoon",
                           "text":"Afternoon Drinks"
                        },
                        {
                           "id":"evening",
                           "text":"Evening Drinks"
                        },
                        {
                           "id":"pre-dinner",
                           "text":"Pre-Dinner Drinks"
                        }
                     ],
                     "tools":[
                        {
                           "id":"citrus-press",
                           "text":"Citrus press"
                        },
                        {
                           "id":"freezer",
                           "text":"Freezer"
                        },
                        {
                           "id":"jigger",
                           "text":"Jigger"
                        },
                        {
                           "id":"strainer",
                           "text":"Strainer"
                        },
                        {
                           "id":"twist-knife",
                           "text":"Twist Knife"
                        },
                        {
                           "id":"boston-shaker",
                           "text":"Boston Shaker"
                        }
                     ],
                     "drinkTypes":[],
                     "actions":[
                        {
                           "id":"shake",
                           "text":"Shake"
                        },
                        {
                           "id":"strain",
                           "text":"Strain"
                        }
                     ],
                     "brands": [
                           "absolut"
                     ],
                     "languageBranch":"en",
                     "id":"absolut-cosmopolitan",
                     "name":"ABSOLUT Cosmopolitan",
                     "descriptionPlain": "Fill a shaker with ice cubes. Add all ingredients. Shake and strain into a chilled cocktail glass. Garnish with orange."
                  },

  drinkName: Ember.computed( function( ) {
    return this.get('sampleResponse').name;
  }),
  drinkCategory: Ember.computed( function( ) {
    return this.get('sampleResponse').story;
  }),
  drinkAlcoholic: Ember.computed( function( ) {
    return( this.get('sampleResponse').isAlcoholic ) ? "Alcoholic" : "Non Alcoholic";
  }),
  drinkInstructions: Ember.computed( function ( ) {
    var r = this.get('sampleResponse').descriptionPlain.split( "." );
    r.pop( );
    return r;
  }),
  drinkTastes: Ember.computed( function( ) {
    return this.get('sampleResponse').tastes;
  }),
  drinkVideo: Ember.computed( function( ) {
    return this.get('sampleResponse').videos[1].video;
  }),
  drinkTools: Ember.computed( function( ) {
    return this.get('sampleResponse').tools;
  }),
  drinkServedIn: Ember.computed( function( ) {
    return this.get('sampleResponse').servedIn.text;
  }),
  drinkOccasions: Ember.computed( function( ) {
    return this.get('sampleResponse').occasions;
  }),
  drinkIngredients: Ember.computed( function( ) {
    return this.get('sampleResponse').ingredients;
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
