const bookshelf = require("../utility/bookshelf");
require('../models/Poll');
const Poll = bookshelf.model('Poll');

module.exports = {
	find: function(params, callback) {
		callback("not supported", null);
	},
	findById: function(pollId, callback) {
		Poll.where({id: pollId })
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
		const errMessage = "not supported"
		callback(errMessage, null);
	},
	destroy: function(params, callback) {
		callback("not supported", null);
	},
}