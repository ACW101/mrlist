// passport.js modules
const passport = require("passport")
const FacebookStrategy = require('passport-facebook').Strategy
const LocalStrategy = require('passport-local').Strategy;

//JWT
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

// Jwt Options
const jwtOptions= {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "TheSecretOfFood"
}

// model
let User = require('../models/User');

// import your own facebook login key
const keys = require('./config/keys');
const facebookConfig = Object.assign({}, 
  keys.facebook,
  { profileFields: ['id', 'displayName', 'photos', 'email', 'name'] }
)

passport.use(new LocalStrategy(authenticate))

passport.use(new JwtStrategy(jwtOptions, function(jwt_payload, done) {
  User.findOne({id: jwt_payload.sub}, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
}))

passport.use("local-register", new LocalStrategy({passReqToCallback: true}, register))

function authenticate(email, password, done){
  User.findOne({email: email})
    .then((User) => {
      console.log(User);
      if (!User || !User.verifyPassword) {
        return done(null, false, {message: "invalid user and password combination"})
      }
      done(null, true)
    }, done)
}

function register(req, email, password, done) {
  console.log(email + password)
  User.findOne({email: email}, {require: false})
    .then((user) => {
      if (user) {
        return done(null, false, {message: "an account with that email has already been created"})
      }

      const newUser = {
        name: req.body.first_name + " " + req.body.last_name,
        email: email,
        password: password
      };
      User.create(newUser)
        .then((user) => {
          done(null, user)
        })
        .catch((e) => { done(e, user) })
  });
}

passport.use(new FacebookStrategy(facebookConfig,
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    User.findOne({ oauth_id: profile.id}, {require: false})
    	.then((user) => {
    		if (user) {
    			return done(null, user)
        }
  		const newUser = {
  			oauth_id: profile.id,
        oauth_provider: 'facebook',
        name: profile.displayName,
        picture: profile.photos[0].value
  		};
  		User.create(newUser)
  			.then(() => {
  				return User.findOne(newUser, {require: true})
			  })
        .then((user) => done(null, user))
        .catch((e) => { done(e, user) })
   	  })
  }
));


passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  User.findOne({id: id})
    .then((user) => {
      done(null, user)
    }, done)
})