import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, xlshirt) {
    controller.set('model', xlshirt);
  }
});
