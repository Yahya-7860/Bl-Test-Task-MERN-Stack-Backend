require('dotenv').config();
const passport = require("passport");
const userSchema = require("../models/userModel");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/google/callback"
},
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await userSchema.findOne({ email: profile.emails[0].value });
        if (existingUser) {
            return done(null, existingUser);
        } else {
            return done(null, false);
        }
    }));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
