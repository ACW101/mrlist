const Restaurant = require('../models/Restaurant');

module.exports = {
	find: function(params, callback) {
		Restaurant.forge(params.query)
				.fetchAll()
				.then((restaurants) => {
					callback(null, restaurants.toJSON());
				})
				.catch(e => callback(e, null))
	},

	findById: function(params, callback) {
		console.log()
	}, 

	create: function(params, callback) {

	}, 

	update: function(params, callback) {

	},

	destroy: function(params, callback) {

	},
}