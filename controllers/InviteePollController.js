const bookshelf = require("../utility/bookshelf");
require('../models/Poll');
const Poll = bookshelf.model('Poll');

module.exports = {
	find: function(params, callback) {
		callback("not supported", null);
	},
	findById: function(params, callback) {
		Poll.where({id: params.pollId })
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
		callback("not supported", null);
	}, 
	update: function(params, callback) {
		Poll.forge({id: params.id})
			.save({poll_counts: params.poll_counts}, {patch: true})
			.then((poll) => {
				if (poll == null) {
					callback("not found", null);
				} 
				callback(null, poll.toJSON());
			})
			.catch(e => callback(e, null))
	},
	destroy: function(params, callback) {
		callback("not supported", null);
	},
}