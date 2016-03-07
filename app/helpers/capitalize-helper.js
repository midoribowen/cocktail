import Ember from 'ember';

export function capitalizeHelper(params/*, hash*/) {
  return params.toString( ).charAt(0).toUpperCase() + params.toString( ).slice(1);
}

export default Ember.Helper.helper(capitalizeHelper);
