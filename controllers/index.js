const RestaurantController = require('./RestaurantController')
const UserController = require('./UserController')

module.exports = {
	user: UserController,
	restaurant: RestaurantController,
}