const bookshelf = require("../utility/bookshelf");
require("./User")
require("./Restaurant")

let Tag = bookshelf.Model.extend({
	tableName: 'tags',
	hasTimestamps: false,
	user: function() {
		return this.belongsTo('User')
    },
    restaurants: function() {
        return this.belongsToMany('Restaurant')
    }
})

module.exports = bookshelf.model('Tag', Tag);