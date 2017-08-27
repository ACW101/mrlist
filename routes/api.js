const router = require("express").Router();
const controllers = require('../controllers/index');
const yelp = require('./yelp');


function loginRequired(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.json({
			confirmation: 'fail',
			message: ('login required!')
		})
	}
	
	// default userID for development
	// req.user = {id: 17}
	next()
}

router
	.use('/yelp', yelp)
	.get('/user/:userResource', loginRequired, function(req, res) {
		const { userResource} = req.params;
		const controller = controllers.userResources[userResource];
		if (controller == null) {
			res.json({
				confirmation: 'fail',
				message: 'invalid resource',
			})
		}
		const params = Object.assign({
			user_id: req.user.id,
		}, req.query);
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
	.get('/user/:userResource/:resource_id', loginRequired, function(req, res) {
		const { userResource, resource_id } = req.params;
		const controller = controllers.userResources[userResource];	
		if (controller == null) {
			res.json({
				confirmation: 'fail',
				message: 'invalid resource',
			})
		}

		const params = {
			user_id: req.user.id, 
			id: parseInt(resource_id)
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
	.get('/user/:userResource/:resource_id/:resourceChild', loginRequired, function(req, res){
		const { userResource, resource_id, resourceChild } = req.params;
		const controller = controllers.resourceChild[userResource][resourceChild];

		if (controller == null) {
			res.json({
				confirmation: 'fail',
				message: 'invalid resource'
			})
		}
		const params = {
			user_id: req.user.id,
			resource_id,
		}
		controller.find(params, function(err, response) {
			if (err) {
				res.json({
					confirmation: 'fail',
					message: (`error getting ${userResource}'s ${resourceChild}: ${err}`)
				})
			}
			res.json({
				confirmation: 'success',
				response: response
			})
		})
	})
	.put('/user/:userResource/:resource_id', loginRequired, function(req,res){
		const { userResource, resource_id } = req.params;
		const controller = controllers.userResources[userResource];	
		const params = {
			user_id: req.user.id,
			body: req.body,
			resource_id,
		};

		controller.update(params, (err, response) => {
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
	.put('/user/:userResource/:resource_id/:resourceChild/:resourceChild_id', loginRequired, function(req, res){
		const { userResource, resource_id, resourceChild, resourceChild_id } = req.params;
		const controller = controllers.resourceChild[userResource][resourceChild];

		if (controller == null) {
			res.json({
				confirmation: 'fail',
				message: 'invalid resource'
			})
		}
		const params = {
			user_id: req.user.id,
			resource_id,
			resourceChild_id,
		}
		controller.update(params, function(err, response) {
			if (err) {
				res.json({
					confirmation: 'fail',
					message: (`error putting ${userResource}'s ${resourceChild}: ${err}`)
				})
			}
			res.json({
				confirmation: 'success',
				response: response
			})
		})
	})
	.post('/user/:userResource', loginRequired, function(req,res){
		const { userResource, resource_id } = req.params;
		const controller = controllers.userResources[userResource];		
		const params = { body: Object.assign({}, req.body, {user_id: req.user.id})};

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
	.delete('/user/:userResource/:resource_id', loginRequired, function(req,res){
		const { userResource, resource_id } = req.params;
		const controller = controllers.userResources[userResource];
		
		const params = {
			user_id: req.user.id,
			resource_id
		};

		controller.destroy(params, (err, response) => {
			if (err) {
				res.json({
					confirmation: 'fail',
					message: `error deleting ${userResource}: ${err}`
				})
			}
			res.json({
				confirmation: 'success',
				response: response
			})
		})
	})
	.delete('/user/:userResource/:resource_id/:resourceChild/:resourceChild_id', loginRequired, function(req, res){
		const { userResource, resource_id, resourceChild, resourceChild_id } = req.params;
		const controller = controllers.resourceChild[userResource][resourceChild];

		if (controller == null) {
			res.json({
				confirmation: 'fail',
				message: 'invalid resource'
			})
		}
		const params = {
			user_id: req.user.id,
			resource_id,
			resourceChild_id,
		}
		controller.destroy(params, function(err, response) {
			if (err) {
				res.json({
					confirmation: 'fail',
					message: (`error putting ${userResource}'s ${resourceChild}: ${err}`)
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