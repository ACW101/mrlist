const passport = require("passport");
const router = require("express").Router()

router
	.get('/facebook',
		passport.authenticate('facebook', 
			{ scope: ['public_profile', 'user_friends'] }
		)
	)
	.get('/facebook/callback', 
		passport.authenticate('facebook', { failureRedirect: '/'}),
		function(req, res){
			res.redirect('/profile');
		}
	)
	.get("/logout", (req, res, next) => {
    req.session.destroy((err) => {
      res.redirect("/")
    })
  })


module.exports = router;