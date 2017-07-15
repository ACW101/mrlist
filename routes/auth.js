const passport = require("passport");
const router = require("express").Router()

router
	.get("/login", (req, res, next) => {
		res.render("index");
	})
	.get('/facebook',
		passport.authenticate('facebook', 
			{ scope: ['public_profile', 'user_friends'] }
		)
	)
	.get('/facebook/callback', 
		passport.authenticate('facebook', { failureRedirect: '/login'}),
		function(req, res){
			res.redirect('/profile');
		}
	)
	.get("/signup", (req, res, next) => {
    res.render("signup")
  })
	.get("/logout", (req, res, next) => {
    req.session.destroy((err) => {
      res.redirect("/auth/login")
    })
  })


module.exports = router;