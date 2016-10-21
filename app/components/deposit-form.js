import Ember from 'ember';

export default Ember.Component.extend({
  hasNumber: Ember.computed.notEmpty('number'),
  hasName: Ember.computed.notEmpty('name'),

  phone:   null,
  name:    null,
  email:   null,
  company:  null,

  actions:{
    changedSelection: function(value){
      this.set('amount', value.amount);
    },
    createAccount: function(){
      this.sendAction('createAccount', {
        phone: this.get('phone'),
        name: this.get('name'),
        email: this.get('email'),
        company: this.get('company')
      });
    },
  },
});
