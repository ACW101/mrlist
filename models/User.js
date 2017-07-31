const bookshelf = require("../utility/bookshelf");
const bcrypt = require("bcrypt-nodejs");
require("./Restaurant");
require("./Friend");

let User = bookshelf.Model.extend({
	tableName: 'users',
	hasTimestamps: false,
	restaurants: function() {
		return this.belongsToMany('Restaurant')
	},
	friends: function() {
		return this.hasMany('Friend')
	},
	verifyPassword: function(password) {
		console.log(this.password);
		return bcrypt.compareSync(password, user.password);
	}
	}
)

module.exports = bookshelf.model('User', User);