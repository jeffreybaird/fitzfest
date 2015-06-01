import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      duration: Math.floor((new Date("2015/07/11") - new Date())/1000/60/60/24) + 1
    };
  }
});
