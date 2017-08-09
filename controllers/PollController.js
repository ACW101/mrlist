const bookshelf = require("../utility/bookshelf");
require('../models/Poll');
const Poll = bookshelf.model('Poll');

module.exports = {
	find: function(params, callback) {
		Poll.where({ user_id: params.user_id})
			.fetchAll()
			.then((polls) => {
				callback(null, polls.toJSON());
			})
	},
	findById: function(params, callback) {
		Poll.where({id: params.id })
			.fetch()
			.then((poll) => {
                if (poll == null) {
                    callback("not found", null);
                }
				callback(null, poll.toJSON());
            })
            .catch(e => callback(e, null))
	}, 
	create: function(params, callback) {
		Poll.create(params.body)
			.then((poll) => {
				callback(null, poll.id);
			})
			.catch(e => callback(e, null))
	}, 
	update: function(params, callback) {
		const errMessage = "not supported"
		callback(errMessage, null);
	},
	destroy: function(params, callback) {
		Poll.destroy({
			user_id: params.user_id,
			id: params.resource_id
		}).then((response) => {
			callback(null, response.toJSON());
		})
		.catch(e => callback(e, null))
	},
}