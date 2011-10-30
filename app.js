var express = require('express');
var Q_Router = require('./libs/config/router');



var app = module.exports = express.createServer();

// session stuff
app.use(express.cookieParser());
app.use(express.session({ secret: "the knower and the known" }));

// Configuration

app.configure(function() {
   app.set('views', './libs/views');
   app.set('view engine', 'jade');
   app.use(express.bodyParser());
   app.use(express.methodOverride());
   app.use(app.router);
   app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
   app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
   app.use(express.errorHandler()); 
});

// set up the router
var router = new Q_Router(app);

// finally, start the server
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

