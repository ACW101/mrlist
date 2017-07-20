const bookshelf = require("../utility/bookshelf");
require("./User")

let Friend = bookshelf.Model.extend({
	tableName: 'friends',
	hasTimestamps: true,
	user: function() {
		return this.belongsTo('User')
	}
})

module.exports = bookshelf.model('Friend', Friend);