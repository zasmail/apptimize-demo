import Ember from 'ember';

export default Ember.Component.extend({
  hasNumber: Ember.computed.notEmpty('number'),
  hasName: Ember.computed.notEmpty('name'),
  cardSaved: false,
  phone:   null,
  firstName:    null,
  lastName:    null,
  email:   null,
  country:   "United States",
  company:  null,
  name: null,

  actions:{
    changedSelection: function(value){
      this.set('amount', value.amount);
    },
    createAccount: function(){
      this.sendAction('createAccount', {
        phone: this.get('phone'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        email: this.get('email'),
        company: this.get('company')
      });
    },
  },
});
