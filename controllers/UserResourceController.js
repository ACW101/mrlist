const bookshelf = require("../utility/bookshelf");
require('../models/User');
const User = bookshelf.model('User');

module.exports = {
	find: function(params, callback) {
		const { user_id, userResource } = params;
		User.where({ id: user_id })
			.fetch({withRelated: userResource})
			.then((user) => {
				callback(null, user.related(userResource));
			})
			.catch( e => callback(e, null))  
	},
	findById: function(params, callback) {
		const { user_id, userResource, userResource_id } = params;
		User.where({ id: user_id })
			.fetch({withRelated: userResource})
			.then((user) => {
				callback(null, user.related(userResource).where({ id: userResource_id}));
			})
			.catch( e => callback(e, null))  

	}, 
	create: function(params, callback) {
		const { user_id, userResource, resource_id } = params;
		User.forge({id: user_id})
			[userResource]()
			.attach(resource_id)
			.then((response) => {
				console.log(response);
				callback(null, response.toJSON());
			})
			.catch(e => callback(e, null))
	}, 
	update: function(params, callback) {
		const errMessage = "not supported"
		callback(errMessage, null)
	},
	destroy: function(params, callback) {
		const errMessage = "not supported"
		callback(errMessage, null);
	},
}