const bcrypt = require("bcrypt-nodejs");
const db = require("./db");
const knex = require("knex");
const passport = require("passport")
const FacebookStrategy = require('passport-facebook').Strategy
const LocalStrategy = require('passport-local').Strategy;

// import your own facebook login key
const facebookKey = require('./facebookKey');

passport.use(new LocalStrategy(authenticate))
passport.use("local-register", new LocalStrategy({passReqToCallback: true}, register))

function authenticate(email, password, done){
  db("Users")
    .where("email", email)
    .first()
    .then((user) => {
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return done(null, false, {message: "invalid user and password combination"})
      }

      done(null, user)
    }, done)
}

function register(req, email, password, done) {
  db("Users")
    .where("email", email)
    .first()
    .then((user) => {
      if (user) {
        return done(null, false, {message: "an account with that email has already been created"})
      }
      if (password !== req.body.password2) {
        return done(null, false, {message: "passwords don't match"})
      }

      const newUser = {
        name: req.body.first_name + " " + req.body.last_name,
        email: email,
        password: bcrypt.hashSync(password)
      };

      db("Users")
        .insert(newUser)
        .then((ids) => {
          newUser.id = ids[0]
          done(null, newUser)
        })
    })
}

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