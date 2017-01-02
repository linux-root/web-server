var express = require('express');
var EXPOSE_PORT = process.env.PORT || 8000;
var app = express();
var middleware = require('./middleware.js');

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/private/route',middleware.requireAuthentication, function(req, res){
  res.send('superusr: mr.kurro');
});
app.use(express.static(__dirname+'/public'));
app.listen(EXPOSE_PORT, function(){
  console.log('server is running on port ' + EXPOSE_PORT);
});
