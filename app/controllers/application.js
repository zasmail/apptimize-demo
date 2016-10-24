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
      Ember.$.ajax({
        type: 'GET',
        url: "https://96f8d662-0bf7-456e-a16b-08e1d7210b08.trayapp.io",
        dataType: 'jsonp',
        data: {
          phone: account.phone,
          firstName: account.firstName,
          lastName: account.lastName,
          email: account.email,
          company: account.company,
        }
      }).then(function(response){
      }, function(something){
      });
    },
  }
});
