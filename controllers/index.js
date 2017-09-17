const RestaurantController = require('./RestaurantController')
const UserController = require('./UserController')
const RestaurantListController = require('./RestaurantListController')
const RestaurantTagsController = require('./RestaurantTagsController')
const FriendController = require('./FriendController')
const PollController = require('./PollController')
const TagController = require('./TagController')
const TagRestaurantsController = require('./TagRestaurantsController')
const inviteePollController = require('./inviteePollController')

module.exports = {
	user: UserController,
	restaurant: RestaurantController,
	inviteePollController: inviteePollController,
	userResources: {
		friends: FriendController,
		restaurants: RestaurantListController,
		polls: PollController,
		tags: TagController,
	},
	resourceChild:{
		restaurants: {
			tags: RestaurantTagsController,
		},
		tags: {
			restaurants: TagRestaurantsController,
		}
	}
}