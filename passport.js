const bcrypt = require("bcrypt-nodejs");
const db = require("./db");
const knex = require("knex");
const passport = require("passport")
  , FacebookStrategy = require('passport-facebook').Strategy;

// import your own facebook login key
const facebookKey = require('./facebookKey');

passport.use(new FacebookStrategy(facebookKey,
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    db("Users")
    	.where("oauth_id", profile.id)
    	.first()
    	.then((user) => {
    		if (user) {
    			return done(null, user)
    		}
    		const newUser = {
    			oauth_id: profile.id,
          oauth_provider: 'facebook',
          name: profile.displayName,
    		};
    		return db("Users")
    			.insert(newUser)
    			.then((ids) => {
    				newUser.id = ids[0];
    				done(null, newUser)
				  }
			)
   	})
  }
));


passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  db("Users")
    .where("id", id)
    .first()
    .then((user) => {
      done(null, user)
    }, done)
})