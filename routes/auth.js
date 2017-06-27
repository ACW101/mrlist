const passport = require("passport");
const router = require("express").Router()

router
	.get("/login", (req, res, next) => {
		res.render("login");
	})
	.get('/auth/facebook',
		passport.authenticate('facebook', 
			{ scope: ['public_profile', 'user_friends'] }
		)
	)
	.get('/auth/facebook/callback', 
		passport.authenticate('facebook', { failureRedirect: '/login'}),
		function(req, res){
			res.redirect('/profile');
		}
	)
;

module.exports = router;