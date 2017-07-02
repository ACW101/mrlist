'use strict';

const router = require("express").Router()
const yelp = require('yelp-fusion');
const db = require("../utility/db");
const yelpKey = require("../utility/keys/yelpKey");
let client = undefined;


function loginRequired(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.redirect("/login")
	}
	next()
}

function getToken() {
	return yelp.accessToken(yelpKey.clientId, yelpKey.clientSecret);
}

router
	.get('/', loginRequired, function(req, res, next) {
		if(typeof client !== "undefined") {
			res.render("add");
		} else {
			console.log('getting token');
			getToken()
				.then(response => {
					client = yelp.client(response.jsonBody.access_token);
					res.render("add");
					})
				.catch(e => { console.log(e); })
		}
	})
	.get('/search', loginRequired, function(req, res, next) {
		client.search(req.query).then(response => {
			console.log(response.jsonBody.businesses);
			res.render("add", {searchResult: response.jsonBody.businesses});
		}).catch(e => {
			console.log(e);
		})
	})


module.exports = router;