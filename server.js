require('dotenv').config();
require('./controller/auth')
const express = require('express')
const mongoose = require('mongoose');
const { userRouter, groupRouter } = require('./routes');
const app = express();
const passport = require('passport')
const session = require("express-session");
const cors = require('cors');


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        sameSite: 'lax',
    },
}));
app.use(passport.initialize());
app.use(passport.session());

const DB_STRING = process.env.DB_CONNECTION_STRING;
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server starting listening at port 8000")
})

const DB_Connect = async () => {
    try {
        await mongoose.connect(DB_STRING);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Unable to connect database!");
    }
}
DB_Connect();
app.use(express.json());

app.use('/', userRouter);
app.use('/', groupRouter);   
