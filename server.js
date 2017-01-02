var express = require('express');
var EXPOSE_PORT = 8000;
var app = express();
var middleware = {
  requireAuthentication: function(req, res, next){
     console.log('private route hit');
     next();
  },
  logger: function(req, res, next){
     console.log('request: ' + req.method + ' ' + req.originalUrl + ' at ' + new Date().toString());
     next();
  }
}
//
// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req, res){
  res.send('superusr: mr.kurro');
});
app.use(express.static(__dirname+'/public'));
app.listen(EXPOSE_PORT, function(){
  console.log('server is running on port ' + EXPOSE_PORT);
});
