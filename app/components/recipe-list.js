import Ember from 'ember';

export default Ember.Component.extend({
  showAlcoholic: true,
  showNotAlcoholic: true,
  showHot: true,
  showCold: true,
  showCarbonated: true,
  showNotCarbonated: true,


  sortProperties: ['name'],
  sortedDrinks: Ember.computed.sort('model', 'sortProperties'),

  actions: {
    alcoholicOrNot(selection) {
      if (selection === 'alcoholic') {
        this.set('showAlcoholic', true);
        this.set('showNotAlcoholic', false);
      } else if (selection === 'nonalcoholic') {
        this.set('showAlcoholic', false);
        this.set('showNotAlcoholic', true);
      } else {
        this.set('showAlcoholic', true);
        this.set('showNotAlcoholic', true);
      }
    },

    hotOrCold(selection) {
      if (selection === 'hot') {
        this.set('showHot', true);
        this.set('showCold', false);
      } else if (selection === 'cold') {
        this.set('showHot', false);
        this.set('showCold', true);
      } else {
        this.set('showHot', true);
        this.set('showCold', true);
      }
    },

    carbonatedOrNot(selection) {
      if (selection === 'carbonated') {
        this.set('showCarbonated', true);
        this.set('showNotCarbonated', false);
      } else if (selection === 'noncarbonated') {
        this.set('showCarbonated', false);
        this.set('showNotCarbonated', true);
      } else {
        this.set('showCarbonated', true);
        this.set('showNotCarbonated', true);
      }
    }
  }
});
