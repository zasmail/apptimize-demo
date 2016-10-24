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
        url: "https://0f934c86-94ce-44c6-a877-1d0f5d032a71.trayapp.io",
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
