module.exports = {
    facebook: {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    },
    yelp: {
        clientId: process.env.YELP_CLIENT_ID,
        clientSecret: process.env.YELP_CLIENT_SECRET
    }
}