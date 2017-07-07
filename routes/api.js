const router = require("express").Router();
const controllers = require('../controllers/index');

function loginRequired(req, res, next) {
	// if (!req.isAuthenticated()) {
	// 	return res.json({
	// 		confirmation: 'fail',
	// 		message: ('login required!')
	// 	})
	// }
	next()
}

router
	.get('/user/:userResource?', loginRequired, function(req, res) {
		const controller = controllers['user'];
		const testId = 11;

	const params = {id: testId, userResource: req.params.userResource};
		
		controller.find(params, function(err, userInfo) {
			if (err) {
				res.json({
					confirmation: 'fail',
					message: ('error getting userInfo: ' + err)
				})
			}
			res.json({
				confirmation: 'success',
				result: userInfo,
			})
		})
	})
	.get('/:resource', function(req, res){
		const resource = req.params.resource;
		const controller = controllers[resource];

		if (controller == null) {
			res.json({
				confirmation: 'fail',
				message: 'invalid resource',
			})
		}

		const params = {query: req.query }
		controller.find(params, function(err, results) {
			if (err) {
				res.json({
					confirmation: 'fail',
					message: err
				})
				return
			}
			res.json({
				confirmation: 'success',
				results: results
			})
		})
	})
	.get('/:resource/:resource_id', function(req, res) {
		const resource = req.params.resource;
		const resource_id = req.params.resource_id;
		const controller = controllers[resource]

		if (controller == null) {
			res.json({
				confirmation: 'fail',
				message: 'invalid resource',
			})
		}

		const params = {resource_id: resource_id , query: req.query }
		controller.findById(params, function(err, results) {
			if (err) {
				res.json({
					confirmation: 'fail',
					message: err
				})
				return
			}
			res.json({
				confirmation: 'success',
				results: results
			})
		})
	})
	.post('/:resource', function(req, res) {
		const resource = req.params.resource;
		const controller = controllers[resource]

		if (controller == null) {
			res.json({
				confirmation: 'fail',
				message: 'invalid resource',
			})
		}

		controller.create(req.body, function(err, results) {
			if (err) {
				res.json({
					confirmation: 'fail',
					message: err
				})
				return
			}
			res.json({
				confirmation: 'success',
				results: results
			})
		})
	})


module.exports = router