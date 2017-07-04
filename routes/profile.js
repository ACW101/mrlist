const router = require("express").Router()
const db = require("../utility/db");

function loginRequired(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.redirect("/auth/login")
	}
	next()
}

router.get('/profile', loginRequired, function(req, res, next) {
	db.from('restaurants')
		.innerJoin('restaurant_list', {
			'restaurant_list.restaurant_id': 'restaurants.id'
		})
		.where('user_id', req.user.id)
		.select('name')
		.then((restaurantList) => {
			res.render('profile.hjs', {name: req.user.name, restaurantList: restaurantList});
		})
});

module.exports = router;