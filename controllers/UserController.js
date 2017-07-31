const bookshelf = require("../utility/bookshelf");
require('../models/User');
const User = bookshelf.model('User');

module.exports = {
	find: function(params, callback) {
		const errMessage ="not supported"
		callback(errMessage, null);
		
	},
	findById: function(id, callback) {
		User.where({ id: params.id })
			.fetch()
			.then((user) => {
				callback(null, user.toJSON());
			})
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
		const errMessage = "not supported"
		callback(errMessage, null);
	},
	destroy: function(params, callback) {
		const errMessage = "not supported"
		callback(errMessage, null);
	},
}