const bookshelf = require("../utility/bookshelf");
require('../models/Restaurant');
const Restaurant = bookshelf.model('Restaurant');

module.exports = {
	find: function(params, callback) {
		const { user_id } = params;
		const restaurant_id = params.resource_id;
		Restaurant.where({ id: restaurant_id})
			.fetch({withRelated: {tags: tag => tag.where({user_id})}})
			.then((restaurant) => {
				callback(null, restaurant.related('tags').toJSON())
			})
			.catch( e => callback(e, null))  
	},
	findById: function(params, callback) {
		// const { user_id, id } = params;
		// User.where({ id: user_id })
		// 	.fetch({withRelated: 'restaurants'})
		// 	.then((user) => {
		// 		callback(null, user.related('restaurants').where({ id: id}));
		// 	})
		// 	.catch( e => callback(e, null))  

	}, 
	create: function(params, callback) {
		const errMessage = "not supported"
		callback(errMessage, null)
	}, 
	update: function(params, callback) {
		// const { user_id, userResource, resource_id } = params;
		// User.forge({id: user_id})
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