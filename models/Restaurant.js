const bookshelf = require("../utility/bookshelf");
require("./User")
require("./Tag")

let Restaurant = bookshelf.Model.extend({
	tableName: 'restaurants',
	hasTimestamps: false,
	users: function() {
		return this.belongsToMany('User')
	},
	tags: function() {
		return this.belongsToMany('Tag')
	}
})

module.exports = bookshelf.model('Restaurant', Restaurant);