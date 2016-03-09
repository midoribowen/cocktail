import Ember from 'ember';

export default Ember.Component.extend({
  showAlcoholic: true,
  showNotAlcoholic: true,
  showHot: true,
  showCold: true,

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
    }
  }
});
