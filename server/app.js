const express = require("express");
const bodyPaser = require("body-parser");

const app = express();
const { API_VERSION } = require("./config");
const bodyParser = require("body-parser");

// load routings
const userRoutes = require("./routers/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configure Header http
//...

// Basic Routers
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;
