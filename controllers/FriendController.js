const bookshelf = require("../utility/bookshelf");
require('../models/Friend');
const Friend = bookshelf.model('Friend');

module.exports = {
	find: function(params, callback) {
		const errMessage ="not supported"
		callback(errMessage, null);
		
	},
	findById: function(id, callback) {
		Friend.where({ id: params.id })
			.fetch()
			.then((friend) => {
				callback(null, friend.toJSON());
			})
	}, 
	create: function(body, callback) {
		Friend.findOrCreate(body)
            .then((friend) => {
                callback(null, friend.toJSON());
            })
            .catch(e => callback(e, null))
	}, 
	update: function(params, callback) {
		const errMessage = "not supported"
		callback(errMessage, null);
	},
	destroy: function(params, callback) {
		Friend.destroy({
			user_id: params.user_id,
			id: params.resource_id
		}).then((response) => {
			callback(null, response.toJSON());
		})
		.catch(e => callback(e, null))
	},
}