var  express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(3000);
//const bootstrap = require('bootstrap');
const game = require('./game.js');
app.use(express.static(__dirname + '/public'));
//~~~~~~~~~~~~~~~~~~~~
const fs = require('fs');
const jquery = require('jquery');
//~~~~~~~~~~~~~~~~~~~~

//app.use(express.static('public'));

app.get('/',function(req,res){
res.sendFile(__dirname+'/index.html');

});
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
