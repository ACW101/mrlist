const router = require("express").Router();
const controllers = require('../controllers/index');
const yelp = require('./yelp');

function loginRequired(req, res, next) {
	// if (!req.isAuthenticated()) {
	// 	return res.json({
	// 		confirmation: 'fail',
	// 		message: ('login required!')
	// 	})
	// }
	
	// default userID for development
	req.user = {id: 17}
	next()
}

router
	.use('/yelp', yelp)
	.get('/user/:userResource', loginRequired, function(req, res) {
		const controller = controllers['userResource'];
		const params = {user_id: req.user.id, userResource: req.params.userResource};

		controller.find(params, function(err, userResource) {
			if (err) {
				res.json({
					confirmation: 'fail',
					message: ('error getting userInfo: ' + err)
				})
			}
			res.json({
				confirmation: 'success',
				result: userResource,
			})
		})
	})
	.get('/user/:userResource/:userResource_id', loginRequired, function(req, res) {
		const controller = controllers['userResource'];
		const params = {
			user_id: req.user.id, 
			userResource: req.params.userResource,
			userResource_id: parseInt(req.params.userResource_id)
		};
		
		controller.findById(params, function(err, userResource) {
			if (err) {
				res.json({
					confirmation: 'fail',
					message: ('error getting userInfo: ' + err)
				})
			}
			res.json({
				confirmation: 'success',
				result: userResource,
			})
		})
	})
	.put('/user/:userResource/:resource_id', loginRequired, function(req,res){
		const { userResource, resource_id } = req.params;
		const controller = controllers['userResource'];

		const params = {
			user_id: req.user.id,
			userResource,
			resource_id
		};
		controller.create(params, (err, response) => {
			if (err) {
				res.json({
					confirmation: 'fail',
					message: `error adding ${userResource}: ${err}`
				})
			}
			res.json({
				confirmation: 'success',
				response: response
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