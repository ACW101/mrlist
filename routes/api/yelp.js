const router = require("express").Router()
const yelp = require('yelp-fusion');
const yelpKey = require("../../utility/config/keys").yelp;
const { fork } = require('child_process')
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
	.get('/bookmark', (req, res, next) => {
		let bookmarks = []
		const { yelp_id } = req.query;
		const subprocess = fork('./utility/yelpBookmarkScraper.js');
		subprocess.send(yelp_id);
		subprocess.on('message', msg => {
			if (msg !== 'eof') {
				bookmarks = bookmarks.concat(msg)
			} else {
				res.send(bookmarks)
			}
		})
	})

module.exports = router;