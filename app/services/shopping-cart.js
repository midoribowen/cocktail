import Ember from 'ember';

export default Ember.Service.extend({
  recipes: [],
  allIngredients: [],
  result: [],

  allIngredientsLength: Ember.computed(function() {
    return this.get('allIngredients').length;
  }),

  addToCart(drink) {
    this.get('recipes').pushObject(drink);
    var ingredients = drink.ingredients;
    var self = this;
    ingredients.forEach(function(ingredient) {

      var quantityWithFraction = ingredient.textPlain.match(/^([0-9¼½½⅓⅔¾])+/i);
      var quantityWithoutFraction = ingredient.textPlain.match(/^([0-9])+/i);
      var fractionsOnly = ingredient.textPlain.match(/([¼½½⅓⅔¾])+/i);
      var newString = "";
      if (quantityWithFraction) {
        newString = ingredient.textPlain.substring(quantityWithFraction.length);
      } else {
        newString = ingredient.textPlain;
      }

      var runningTotal = (parseFloat(quantityWithoutFraction) > 0) ? parseFloat(quantityWithoutFraction) : 0;

      if (fractionsOnly) {
        switch (fractionsOnly[0]) {
          case '¼':
            runningTotal += 0.25;
            break;
          case '½':
            runningTotal += 0.5;
            break;
          case '¾':
            runningTotal += 0.75;
            break;
          case '⅓':
            runningTotal += 0.33;
            break;
          case '⅔':
            runningTotal += 0.66;
            break;
          default:
            break;
        }
      }

      var pair = {
        drink_name: drink.name,
        ingredient_id: ingredient.id,
        amount: runningTotal,
        newString: newString,
      };
      self.get('allIngredients').pushObject(pair);
      self.notifyPropertyChange('allIngredients');
      self.notifyPropertyChange('recipes');
    });
  },

  removeFromCart(drink) {
    var drinkName = drink.name;
    var toRemove = [];

    this.get('recipes').removeObject(drink);
    this.get('allIngredients').forEach(function(ingredient) {
      if (ingredient.drink_name === drinkName) {
        toRemove.pushObject(ingredient);
      }
    });
    this.get('allIngredients').removeObjects(toRemove);
    this.notifyPropertyChange('allIngredients');
    this.notifyPropertyChange('recipes');
 },

 containsDrink(drink) {
   var result = false;
   this.get('recipes').forEach(function(recipe) {
     if (recipe.name === drink.name) {
       result = true;
     }
   });
   return result;
 },

 multiplyForGuests( ) {
   // Work around to always referesh the computed property when user
   // clicks the update button.
   this.notifyPropertyChange('allIngredients');
 },

 saveResult(list) {
   this.set('result', list);
   this.notifyPropertyChange('result');
 }
});
