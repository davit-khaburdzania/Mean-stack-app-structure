var express = require('express'),
    app = express(),
    pub_dir = __dirname + '/public',
    config = require('nconf').argv().env();

// enviroment specific configuration
if (app.get('env') === 'development') {
  config.file('local', __dirname + '/configs/local.json');
}
config.file('config', __dirname + '/configs/config.json');

// global variables
global.config = config;
global.mongoose = require('mongoose');

global.Middlewares = require(__dirname + '/middlewares');
global.Models = require(__dirname + '/models');

// base configuration
app.use(app.router);
app.use(express.static(pub_dir));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

require(__dirname + '/controllers')(app);

// middlewares
app.use(Middlewares.error_handler);

app.listen(config.get('port'), function () {
  console.log('listening on port:', config.get('port'));
});
