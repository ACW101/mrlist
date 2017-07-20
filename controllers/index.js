const RestaurantController = require('./RestaurantController')
const UserController = require('./UserController')
const UserResourceController = require('./UserResourceController')
const FriendController = require('./FriendController')

module.exports = {
	user: UserController,
	userResource: UserResourceController,
	restaurant: RestaurantController,
	friend: FriendController
}