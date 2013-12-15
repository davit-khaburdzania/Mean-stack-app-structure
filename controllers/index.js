module.exports = function (app) {
  var fs = require('fs');

  fs.readdirSync(__dirname)
    .filter(function (dir) { 
      return (dir != 'index.js');
    })
    .map(function (dir) {
      dir = __dirname + '/' + dir;

      if (fs.lstatSync(dir).isDirectory()) {
        load_from_dir(dir);
      }

      if (dir.indexOf('.js') !== -1) {
        load(dir, false);
      }
    });


  function load (file, directory) {
    var express = require('express'),
        new_app = express(),
        views;

    views = directory ? directory + '/views' : __dirname + '/../views';
    new_app.set('views', views);
    new_app.set('view engine', 'jade');

    require(file)(new_app);
    app.use(new_app);
  };

  function load_from_dir (path) {
    fs.readdirSync(path)
      .filter(function (dir) {
        return (dir != 'views');
      })
      .forEach(function (dir) {
        load(path + '/' + dir, path);
      });
  };
}
