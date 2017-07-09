const bookshelf = require("../utility/bookshelf");
const bcrypt = require("bcrypt-nodejs");
require("./Restaurant");

let User = bookshelf.Model.extend({
	tableName: 'users',
	hasTimestamps: false,
	restaurants: function() {
		return this.belongsToMany('Restaurant')
	},
	verifyPassword: function(password) {
		console.log(this.password);
		return bcrypt.compareSync(password, user.password);
	}
	}, {
})

module.exports = bookshelf.model('User', User);