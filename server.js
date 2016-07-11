var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(__dirname+'/client'));

app.use(express.static(__dirname+'/bower_components'));




var server = app.listen(8000, function(){
	console.log("APPLICATION IS DEFINITLEY LISTENING...");
});