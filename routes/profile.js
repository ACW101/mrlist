const router = require("express").Router()
const UserController = require("../controllers/UserController");

function loginRequired(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.redirect("/auth/login")
	}
	next()
}

router.get('/', loginRequired, function(req, res, next) {
	UserController.find({id: req.user.id}, 
		(err, response) => {
			console.log(response);
			if (err) console.log(err);
			res.render('profile.hjs', {name: req.user.name, restaurants: response})
		})
});

module.exports = router;