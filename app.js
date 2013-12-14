var express = require('express'),
    app = express(),
    pub_dir = __dirname + '/public',
    nconf = require('nconf').argv().env();

// global variables
global.nconf = nconf;
global.middlewares = require(__dirname + '/middlewares');

// base configuration
app.use(app.router);
app.use(express.static(pub_dir));
app.set('views', __dirname + '/views');
app.set('view engene', 'jade');

// enviroment specific configuration
if (app.get('env') === 'development') {
  nconf.file({ file: __dirname + '/configs/local.json' });
}

nconf.file({ file: __dirname + '/configs/config.json' });

// middlewares
app.use(middlewares.error_handler);

app.listen(nconf.get('port'), function () {
  console.log('listening on port:', nconf.get('port'));
});
