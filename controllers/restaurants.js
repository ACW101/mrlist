const db = require('../utility/db.js');

const restaurants = {
	findById: (id, done) => {
		db("restaurants")
			.select('*')
			.where({id: id})
			.first()
			.then((restaurant) => {
				done(null, restaurant)
			})
			.catch(err => done(err, null))
	},
	findAll: (done) => {
		db("restaurants")
			.select('*')
			.then((restaurants) => {
				done(null, restaurant)
			})
			.catch(err => done(err, null))
	}

}

module.exports = restaurants;