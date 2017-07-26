const RestaurantController = require('./RestaurantController')
const UserController = require('./UserController')
const RestaurantListController = require('./RestaurantListController')
const FriendController = require('./FriendController')

module.exports = {
	user: UserController,
	restaurant: RestaurantController,
	userResources: {
		friends: FriendController,
		restaurants: RestaurantListController,
	}
}