exports.error_handler = function (err, req, res, next) {
  console.log(err);
};

exports.base_dir = function (req, res, next) {
  res.locals.basedir = __dirname + '/../views';
  next()
};
