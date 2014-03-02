var express = require('express');
    http = require('http'),
    path = require('path'),
    app = express();
    config = require('nconf').argv().env().file('config', __dirname + '/configs/global.json');

global.express = express;
global.Middlewares = require(__dirname + '/middlewares');
global.Helpers = require(__dirname + '/helpers');

if (app.get('env') === 'development') {
  app.use(express.errorHandler());
  app.use(Middlewares.less());
  config.file('local', __dirname + '/configs/local.json');
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//global variables
global.config = config;
global.mongoose = require('mongoose');
global._ = require('underscore');
global.base_dir = __dirname;
global.app = app;
global.Models = require(__dirname + '/models')(config.get('DB'));

require(__dirname + '/controllers');
app.use(Middlewares.error_handler);


http.createServer(app).listen(config.get('PORT'), function(){
  console.log('server listening on port ' + config.get('PORT'));
});
