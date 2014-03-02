exports.get_config = function () {
  var config = require('nconf').argv().env(),
      app_path = __dirname + '/..';

  config.file('local', app_path + '/configs/local.json');
  config.file('config', app_path + '/configs/global.json');

  return config;
};
