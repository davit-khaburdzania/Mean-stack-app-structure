exports.error_handler = function (err, req, res, next) {
  console.log(err);
};

exports.less = function () {
  var less = require("less-middleware");
  
  return less({
    dest: __dirname + "/../public/css",
    src: __dirname + "/../public/less",
    prefix: "/css",
    compress: true,
    force: true,
  });
}
