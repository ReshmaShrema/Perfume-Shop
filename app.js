const express = require('express');
const dotenv = require('dotenv');
const sessions = require('express-session')


//app init and middleware
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
app.use(
    sessions({
        secret: 'secretkey',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 6000000 },
    })
);

dotenv.config({path:'config.env'})
//require('dotenv').config();


const PORT = process.env.PORT || 8080;

//setting view engin
app.set('view engine','hbs')