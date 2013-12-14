var express = require('express'),
    app = express(),
    pub_dir = __dirname + '/public',
    nconf = require('nconf').argv().env();

app.use(app.router);
app.use(express.static(pub_dir));

app.set('views', __dirname + '/views');
app.set('view engene', 'jade');

if (app.get('env') === 'development') {
  nconf.file({ file: __dirname + '/configs/local.json' });

  if (nconf.get('loging')) {
    app.use(express.errorHandler());
  }
}

nconf.file({ file: __dirname + '/configs/config.json' });

app.listen(nconf.get('port'), function () {
  console.log('listening on port:', nconf.get('port'));
});
