const express = require("express");
const bodyPaser = require("body-parser");

const app = express();
const { API_VERSION } = require("./config");
const bodyParser = require("body-parser");

// load routings
//...

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configure Header http
//...

// Basic Routers
//...

module.exports = app;
