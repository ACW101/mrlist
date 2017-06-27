const bcrypt = require("bcrypt-nodejs");
const db = require("./db");
const knex = require("knex");
const passport = require("passport")
  , FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: "689442521266270",
    clientSecret: "1bbd0d9343640143e80f7dd1c9f39fd0",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    db("users")
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
    		return db("users")
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
  db("users")
    .where("id", id)
    .first()
    .then((user) => {
      done(null, user)
    }, done)
})