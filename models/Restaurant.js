const bookshelf = require("../utility/bookshelf");
require("./User")

let Restaurant = bookshelf.Model.extend({
	tableName: 'restaurants',
	hasTimestamps: false,
	users: function() {
		return this.belongsToMany('User')
	}
})

module.exports = bookshelf.model('Restaurant', Restaurant);