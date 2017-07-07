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
		User.forge({id: params.id})
				.fetch({withRelated: !!params.userResource})
				.then((User) => {
					callback(null, User.related('restaurants').toJSON());
				})
				.catch(e => callback(e, null))
	},

	findById: function(id, callback) {
		const errMessage ="not supported"
		callback(errMessage, null);
	}, 

	create: function(params, callback) {
		const errMessage = "not supported"
		callback(errMessage, null);
	}, 

	update: function(params, callback) {

	},

	destroy: function(params, callback) {
		const errMessage = "not supported"
		callback(errMessage, null);
	},
}