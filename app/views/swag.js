import Ember from 'ember';

export default Ember.View.extend({
	input: function(event) {
	  if (event.target.id === "size") {
	  	this.get('controller').send('updateSelectedSize',event.target.value);
	  	this.get('controller').send('updatePrice', event.target.value);
	  }
	  if (event.target.id === "quantity") {
	  	this.get('controller').send('updateQuantity',event.target.value);
	  }
	    var children = this.get('childViews');
	    var paypal = children.objectAt(3);
	    paypal.rerender();
  }
});