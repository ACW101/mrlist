const Restaurant = require('../models/Restaurant');

module.exports = {
	find: function(params, callback) {
		Restaurant.where(params.query)
				.fetchAll()
				.then((restaurants) => {
					callback(null, restaurants.toJSON());
				})
				.catch(e => callback(e, null))
	},

	findById: function(params, callback) {
		Restaurant.findOne({id: params.resource_id})
							.then((restaurant) => {
								callback(null, restaurant.toJSON());
							})
							.catch(e => callback(e, null))
	}, 

	create: function(params, callback) {
		Restaurant.findOrCreate(params)
				.then((restaurant) => {
					callback(null, restaurant.toJSON());
				})
				.catch(e => callback(e, null))
	}, 

	update: function(params, callback) {

	},

	destroy: function(params, callback) {

	},
}