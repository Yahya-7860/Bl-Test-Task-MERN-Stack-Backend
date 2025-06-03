const { handleRegisterUser } = require('../controller/userController');
const userRouter = require('express').Router();
const passport = require("passport");


userRouter.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

userRouter.get("/google/callback",
    passport.authenticate("google", {
        successRedirect: "http://localhost:5173/dashboard",
        failureRedirect: "http://localhost:5173/"
    })
);
userRouter.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect("http://localhost:5173/");
    });
});

userRouter.get('/auth/user', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ user: req.user });
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
});

//for registration manually
userRouter.post('/register', handleRegisterUser);
module.exports = { userRouter };