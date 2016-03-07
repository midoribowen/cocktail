import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    search() {
      var query = this.get('search');
      this.sendAction('search', query);
    }
  }
});
