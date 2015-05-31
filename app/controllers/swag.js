import Ember from 'ember';

export default Ember.Controller.extend({
	today: new Date(),
	fitzfest: new Date("2015/12/12"),
	selectedSize: null,
	selectedQuantity: 1,
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