import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    search(params) {
      this.sendAction('search', params);
    }
  }
});
