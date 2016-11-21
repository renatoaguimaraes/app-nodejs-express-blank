var express = require("express");
var app = express();
var http = require('http');
var bodyParser = require('body-parser');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//View engine setup
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);


//Server Listening
var standardServer = http.createServer(app);
standardServer.listen(process.env.PORT || 5000,function (){
    console.log('HTTP Server on');
});
