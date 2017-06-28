const passport = require("passport");
const router = require("express").Router()

router
	.get("/login", (req, res, next) => {
		res.render("login");
	})
	.post("/login", passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
  }))
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
	.get("/signup", (req, res, next) => {
    res.render("signup")
  })
  .post("/signup", passport.authenticate("local-register", {
    successRedirect: "/profile",
    failureRedirect: "/signup",
  }))
	.get("/logout", (req, res, next) => {
    req.session.destroy((err) => {
      res.redirect("/login")
    })
  })


module.exports = router;