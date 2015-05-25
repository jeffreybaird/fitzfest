import Ember from 'ember';

export default Ember.Controller.extend({
	selectedSize: null,
	selectedQuantity: null,
	price: "15.00",
	sizes: ["XL","L","M","S","XS"],
	quantities: [1,2,3,4,5,6,7,8,9,10],

	actions: {
		updateSelectedSize: function(size) {
			this.set('selectedSize', size);
		},
		updateQuantity: function(quantity) {
			this.set('selectedQuantity', quantity);
		}

	},
});