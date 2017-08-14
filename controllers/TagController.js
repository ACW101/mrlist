const Tag = require('../models/Tag');

module.exports = {
	find: function(params, callback) {
		Tag.where(params)
				.fetchAll()
				.then((tags) => {
					callback(null, tags.toJSON());
                })
				.catch(e => callback(e, null))
	},

	findById: function(params, callback) {
        const message = "not supported"
        callback(message, null);
	}, 

	create: function(params, callback) {
		Tag.findOrCreate(params.body)
            .then((tag) => {
                callback(null, tag.id);
            })
            .catch(e => callback(e, null))
	}, 

	update: function(params, callback) {
        Tag.update(params.body, {id: params.resource_id})
            .then(res => {
                callback(null, res);
            })
            .catch(e => callback(e, null))
	},

	destroy: function(params, callback) {
        Tag.destroy({
			user_id: params.user_id,
			id: params.resource_id
		}).then((response) => {
			callback(null, response.toJSON());
		})
		.catch(e => callback(e, null))
	},
}