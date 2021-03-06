const express = require('express'); 
const app = express(); 
const http = require('http'); 
const port = 3000; 
const index = require('./controllers/index'); 
app.use('/', index); 
var path = require('path');
app.set('views', path.join(__dirname, 'views')); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html'); 
http.createServer(app) .listen(port, function() { console.log('App listening on port ' + port + '!'); 
});