const bookshelf = require("../utility/bookshelf");
require('../models/User');
const User = bookshelf.model('User');

module.exports = {
	find: function(params, callback) {
		User.forge({id: params.id})
			.fetch({withRelated: params.userResource})
			.then((user) => {
				callback(null, user.toJSON());
			})
	},

	findRestaurants: function(params, callback) {
		User.where({id: params.id})
			.fetch({withRelated: !!params.userResource})
			.then((user) => {
				callback(null, user.related('restaurants').toJSON());
			})
			.catch(e => callback(e, null))
	},

	addRestaurant: function(params, callback) {
		const { id, userResource, resource_id } = params;
		User.forge({id: params.id})
			.restaurants()
			.attach(resource_id)
			.then((response) => {
				console.log(response);
				callback(null, response.toJSON());
			})
			.catch(e => callback(e, null))
	},

	findById: function(id, callback) {
		const errMessage ="not supported"
		callback(errMessage, null);
	}, 

	create: function(params, callback) {
		User.findOrCreate(params)
				.then((user) => {
					const json = user.toJSON();
					console.log(json);
					callback(null, json);
				})
				.catch(e => callback(e, null))
	}, 

	update: function(params, callback) {

	},

	destroy: function(params, callback) {
		const errMessage = "not supported"
		callback(errMessage, null);
	},
}