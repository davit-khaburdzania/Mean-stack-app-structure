var express = require('express'),
    app = express(),
    pub_dir = __dirname + '/public',
    config = require('nconf').argv().env();

global.Middlewares = require(__dirname + '/middlewares');
global.config = config;
global.mongoose = require('mongoose');
global.base_dir = __dirname;

// development configuration
if (app.get('env') === 'development') {
  config.file('local', __dirname + '/configs/local.json');
  app.use(Middlewares.less());
}

config.file('config', __dirname + '/configs/config.json');
app.use(Middlewares.base_dir);

// base configuration
app.use(app.router);
app.use(express.static(pub_dir));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

require(__dirname + '/controllers')(app);
global.Models = require(__dirname + '/models');
app.use(Middlewares.error_handler);

app.listen(config.get('port'), function () {
  console.log('listening on port:', config.get('port'));
});
