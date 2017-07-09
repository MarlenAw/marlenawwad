var express = require("express");
var app = express();
var io = require("socket.io")(); /*we'll need to add another parenthesis with socket.io...this is where you would pass options to socket.io that the falter just find for us so I'm gonna leave that blank.*/
//var nodemailer = require('nodemailer');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'views');

app.locals.siteTitle = 'Marlen Awwad'; /*its gonna be a local variable available inside all my views*/

app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/aboutme'));
app.use(require('./routes/skills'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));
app.use(require('./routes/contact'));
app.use(require('./routes/contact-api'));





var server = app.listen(app.get('port'), function(){
	console.log("Server is listening on port " + app.get('port'));
});


io.attach(server);
io.on('connection', function(socket) {
	console.log('User connected');
  socket.on('disconnect', function(){
	 console.log('User Disconnected'); 
  });	
  socket.on('postMessage', function(data) {
    io.emit('updateMessages', data);
  });
});



































