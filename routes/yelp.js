const router = require("express").Router()
const yelp = require('yelp-fusion');
const yelpKey = require("../utility/config/keys").yelp;
let client;

// get access token at startup
(function() {
	yelp.accessToken(yelpKey.clientId, yelpKey.clientSecret)
		.then(response => {
			client = yelp.client(response.jsonBody.access_token);
		})
		.catch(e => { console.log(e) })
})()


router
	.get('/search', function(req, res, next) {
		client.search(req.query).then(response => {
			console.log(response.jsonBody.businesses);
			res.json({searchResult: response.jsonBody.businesses});
		}).catch(e => {
			console.log(e);
		})
	})
	.get('/business', (req, res) => {
		console.log(req.query.id);
		client.business(req.query.id).then(response => {
			res.json(response);
		}).catch(e =>  {
			console.log(e);
		})
	})


module.exports = router;