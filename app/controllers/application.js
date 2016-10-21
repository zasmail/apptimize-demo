import Ember from 'ember';

export default Ember.Controller.extend({
  stripe: Ember.inject.service(),
  ajax: Ember.inject.service(),
  stripeIsProcessing: false,
  cardSaving: false,
  creditCardErrors: null,
  cardSaved: false,

  actions:{
    createAccount: function(account) {
      debugger;
    },
  }
});
