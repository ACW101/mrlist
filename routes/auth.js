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
	.post("/login", (req, res, next) => {
		passport.authenticate('local', { session: false }, (err, user, info) => {
			if (err) {
				res.json({confirmation: "err", err: err})
			}
			if (!user) {
				res.json({confirmation: "fail", info: info})
			}
			const token = generateToken(user.id, "local")
			res.json({confirmation: "ok", token: token});
		})(req, res, next)
	})
	.post("/register", (req, res, next) => {
		passport.authenticate('local-register', { session: false }, (err, user, info) => {
			if (err) {
				res.json({confirmation: "err", err: err})
			}
			if (!user) {
				res.json({confirmation: "fail", info: info})
			}
			const token = generateToken(user.id, "local")
			res.json({confirmation: "ok", token: token});
		})(req, res, next)
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