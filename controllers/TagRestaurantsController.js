const bookshelf = require("../utility/bookshelf");
require('../models/Tag');
const Tag = bookshelf.model('Tag');

module.exports = {
	find: function(params, callback) {
		const { user_id } = params;
		const tag_id = params.resource_id;
		Tag.where({ id: tag_id, user_id })
			.fetch({withRelated: 'restaurants'})
			.then((tag) => {
				if(tag == null) {
					callback("no such tag", null);
				}
				callback(null, tag.related('restaurants').toJSON());
			})
			.catch( e => callback(e, null))  
	},
	findById: function(params, callback) {
		const errMessage = "not supported"
		callback(errMessage, null)

	}, 
	create: function(params, callback) {
		const errMessage = "not supported"
		callback(errMessage, null)
	}, 
	update: function(params, callback) {
		// const { user_id, userResource, resource_id } = params;
		// Tag.forge({id: user_id})
		// 	.restaurants()
		// 	.attach(resource_id) 
		// 	.then((response) => {
		// 		console.log(response);
		// 		callback(null, response.toJSON());
		// 	})
		// 	.catch(e => callback(e, null))
	},
	destroy: function(params, callback) {
		// const { user_id, userResource, resource_id } = params;
		// User.forge({id: user_id})
		// 	.restaurants()
		// 	.detach(resource_id)
		// 	.then((response) => {
		// 		console.log(response);
		// 		callback(null, response.toJSON());
		// 	})
		// 	.catch(e => callback(e, null))
	},
}