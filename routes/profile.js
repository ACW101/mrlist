const router = require("express").Router()
const db = require("../db");
const knex = require("knex");

function loginRequired(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.redirect("/login")
	}
	next()
}

router.get('/profile', loginRequired, function(req, res, next) {
	res.render('profile.hjs', {name: req.user.name});
});

module.exports = router;