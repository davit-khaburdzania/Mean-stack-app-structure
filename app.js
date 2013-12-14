var express = require('express'),
    app = express(),
    pub_dir = __dirname + '/public',
    port = 3000;

app.use(app.router);
app.use(express.static(pub_dir));

app.set('views', __dirname + '/views');
app.set('view engene', 'jade');

if (app.get('env') === 'development') {
  console.log('development');
} else {
  console.log(app.get('env'), ' prod bitches');
}

app.listen(port, function () {
  console.log('listening on port:', port);
});
