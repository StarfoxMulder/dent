var path = require('path');
var express = require('express');
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var logger = require("morgan");
var mongoose = require("mongoose");
var Router = express.Router();
var routes = require("./routes/index.js");
var request = require("request");
var Promise = require("bluebird");

var app = express();
    app.use(express.static("./public"));


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3333, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3333');
});
