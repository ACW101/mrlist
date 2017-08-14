const bookshelf = require("../utility/bookshelf");
const bcrypt = require("bcrypt-nodejs");
require("./Restaurant");
require("./Friend");
require("./Poll");
require("./Tag");

let User = bookshelf.Model.extend({
	tableName: 'users',
	hasTimestamps: false,
	restaurants: function() {
		return this.belongsToMany('Restaurant')
	},
	friends: function() {
		return this.hasMany('Friend')
	},
	polls: function(){
		return this.hasMany('Poll')
	},
	tags: function(){
		return this.hasMany('Tag')
	},
	verifyPassword: function(password) {
		return bcrypt.compareSync(password, user.password);
	}
})

module.exports = bookshelf.model('User', User);