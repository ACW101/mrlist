'use strict';

const router = require("express").Router()
const yelp = require('yelp-fusion');
const db = require("../utility/db");
const yelpKey = require("../utility/keys/yelpKey");
let client;


(function() {
	yelp.accessToken(yelpKey.clientId, yelpKey.clientSecret)
		.then(response => {
			client = yelp.client(response.jsonBody.access_token);
		})
		.catch(e => { console.log(e) })
})()

function loginRequired(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.redirect("/auth/login")
	}
	next()
}

router
	.get('/', loginRequired, function(req, res, next) {
			res.render("yelp");
	})
	.get('/search', loginRequired, function(req, res, next) {
		client.search(req.query).then(response => {
			console.log(response.jsonBody.businesses);
			res.render("yelp", {searchResult: response.jsonBody.businesses});
		}).catch(e => {
			console.log(e);
		})
	})


module.exports = router;