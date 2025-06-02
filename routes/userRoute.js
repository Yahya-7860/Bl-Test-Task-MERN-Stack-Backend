const { handleRegisterUser } = require('../controller/userController');
const userRouter = require('express').Router();
const passport = require("passport");
const protectedRoute = require('../middleware/protectedRoute');

userRouter.post('/register', handleRegisterUser);


userRouter.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

userRouter.get("/google/callback",
    passport.authenticate("google", {
        successRedirect: "http://localhost:8000/dashboard",
        failureRedirect: "/"
    })
);
userRouter.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect("/");
    });
});

module.exports = { userRouter };