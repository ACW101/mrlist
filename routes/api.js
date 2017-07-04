const router = require("express").Router();
const restaurantsController = require('../controllers/restaurants')

router
	.get('/:resource/:id?', function(req, res){
		const resource = req.params.resource;
		const id = req.params.id;

		function handleResponse(err, response) {
			if (err) {
				res.json({
						confirmation: 'fail',
						message: 'error finding restaurant err: ' + err,
					})
			}
			res.json({
				confirmation: 'success',
				restaurant: response
			})
		}

		if (resource == 'restaurants') {
			if (typeof id != 'undefined') {
				restaurantsController.findById(id, handleResponse)
			} else {
				restaurantsController.findAll(handleResponse)
			}
		}
	})


module.exports = router