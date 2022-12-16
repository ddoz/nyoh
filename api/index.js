/**
 * 
 * ONE PAGE API (OPA)
 * DDOZ
 * 2022-12-16 15:18
 * 
 */

const mysql = require('mysql');
const express = require('express');
const bodyParser = require("body-parser");
const http = require('http');

let app = express();
let PORT = 3000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, DELETE, POST, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});
app.use(bodyParser.json());

app.get('/', function (req, res) {
    var data = {
        "msg": [
            "welcome",
            "to",
            "api"
        ]
    };
    res.json(data);
});

/**
 * AUTH ROUTES
 */
app.post('/register', function (req, res) {
});

app.post('/login', function (req, res) {
});

app.post('/logout', function (req, res) {
});

/**
 * ACCOUNT ROUTES
 */
app.get('/profile/:id', function (req, res) {
});
app.post('/profile', function (req, res) {
});

/**
 * STORE ROUTES
 */



/**
 * SERVE HTTP
 */
http.createServer(app)
    .listen(PORT, function () {
        console.log('http on port ' + PORT);
    });