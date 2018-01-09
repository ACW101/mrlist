const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const router = require("express").Router()
const jwt = require('jsonwebtoken');
const secretOrKey = "TheSecretOfFood"

function generateToken(id, provider) {
	const payload = {
		id: id, 
		provider: provider
	}
	return jwt.sign(payload, secretOrKey);
}

router
	.post("/login", passport.authenticate('local', { session: false }), (req,res) => {
		const token = generateToken(req.user.id, "local")
		res.json({message: "ok", token: token});
	})
	.post("/register", passport.authenticate("local-register"), (req, res) => {
		const token = generateToken(req.user.id, "local")
		res.json({message: "ok", token: token});
	})
	.get('/facebook',
		passport.authenticate('facebook', 
			{ scope: ['public_profile', 'user_friends'] }
		)
	)
	.get('/facebook/callback', passport.authenticate('facebook'), (req, res) => {
		const token = generateToken(req.user.id, "facebook")
		res.json({message: "ok", token: token})
	}
	)
	.get("/logout", (req, res, next) => {
    req.session.destroy((err) => {
      res.redirect("/")
    })
  })


module.exports = router;