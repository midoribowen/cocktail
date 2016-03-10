import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    search() {
      var query = this.get('drinksearch');
      this.set('drinksearch', '');
      this.sendAction('search', query);
    }
  }
});
