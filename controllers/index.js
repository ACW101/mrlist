const RestaurantController = require('./RestaurantController')
const UserController = require('./UserController')
const RestaurantListController = require('./RestaurantListController')
const FriendController = require('./FriendController')
const PollController = require('./PollController')
const TagController = require('./TagController')

module.exports = {
	user: UserController,
	restaurant: RestaurantController,
	userResources: {
		friends: FriendController,
		restaurants: RestaurantListController,
		polls: PollController,
		tags: TagController,
	}
}