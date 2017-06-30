const router = require("express").Router()
const db = require("../utility/db");

function loginRequired(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.redirect("/login")
	}
	next()
}

router.get('/profile', loginRequired, function(req, res, next) {
	db.from('Restaurant')
		.innerJoin('Restaurant_list', {
			'Restaurant_list.restaurant_id': 'Restaurant.id'
		})
		.where('user_id', req.user.id)
		.select('name')
		.then((restaurantList) => {
			res.render('profile.hjs', {name: req.user.name, restaurantList: restaurantList});
		})
});

module.exports = router;