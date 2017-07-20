const RestaurantController = require('./RestaurantController')
const UserController = require('./UserController')
const UserResourceController = require('./UserResourceController')

module.exports = {
	user: UserController,
	userResource: UserResourceController,
	restaurant: RestaurantController,
}