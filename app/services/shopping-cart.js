import Ember from 'ember';

export default Ember.Service.extend({
  recipes: [],
  allIngredients: [],

  addToCart(drink) {
    this.get('recipes').pushObject(drink);
    var ingredients = drink.ingredients;
    var self = this;
    ingredients.forEach(function(ingredient) {
      var id = ingredient.id;
      var runningTotal = 0;
      var firstChar = ingredient.textPlain.slice(0,1);
      var secondChar = ingredient.textPlain.slice(1,2);
      if ((firstChar === '¼') || (secondChar === '¼')) {
        runningTotal += 0.25;
      }
      if ((firstChar === '½') || (secondChar === '½')) {
        runningTotal += 0.5;
      }
      if ((firstChar === '¾') || (secondChar === '¾')) {
        runningTotal += 0.75;
      }
      if (!isNaN(firstChar)) {
        runningTotal += parseInt(ingredient.textPlain.slice(0,1));
      }
      var pair = {
        drink_name: drink.name,
        ingredient: ingredient.id,
        amount: runningTotal
      }
      self.get('allIngredients').pushObject(pair);
    });
  }
});
