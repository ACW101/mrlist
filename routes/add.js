'use strict';

const router = require("express").Router()
const yelp = require('yelp-fusion');
const db = require("../utility/db");
const yelpKey = require("../utility/keys/yelpKey");
let access_token;


function loginRequired(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.redirect("/login")
	}
	next()
}

function getToken() {
	return yelp.accessToken(yelpKey.clientId, yelpKey.clientSecret);
}

router.get('/add', loginRequired, function(req, res, next) {
	if(typeof access_token !== "undefined") {
		console.log('token exists');
	} else {
		console.log('getting token');
		getToken()
			.then(response => access_token = response.jsonBody.access_token)
			.catch(e => { console.log(e); })
	}
 	res.send();

	// db.from('Restaurant')
	// 	.innerJoin('Restaurant_list', {
	// 		'Restaurant_list.restaurant_id': 'Restaurant.id'
	// 	})
	// 	.where('user_id', req.user.id)
	// 	.select('name')
	// 	.then((restaurantList) => {
	// 		res.render('profile.hjs', {name: req.user.name, restaurantList: restaurantList});
	// 	})
});

module.exports = router;