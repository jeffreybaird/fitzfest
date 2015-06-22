import Ember from 'ember';

export default Ember.Controller.extend({
	today: new Date(),
	fitzfest: new Date("2015/07/01"),
	selectedSize: null,
	selectedQuantity: 1,
	price: "10.00",
	sizes: ["Adult S","Adult M","Adult L","Adult XL","Adult XXL", "Adult XXXL", "Adult XXXXL", "Youth S", "Youth M", "Youth L"],
	quantities: [1,2,3,4,5,6,7,8,9,10],
	actions: {
		updateSelectedSize: function(size) {
			this.set('selectedSize', size);
		},
		updateQuantity: function(quantity) {
			this.set('selectedQuantity', quantity);
		},
		updatePrice: function(size) {
			if (size === "Youth S" || size === "Youth M" || size === "Youth L") {
				this.set('price', '9.00');
			} else{this.set('price', '10.00');};
		},
	},
});