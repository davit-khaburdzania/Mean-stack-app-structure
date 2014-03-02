exports.recreate = function (Model, done) {
  var fixtures = require(__dirname + '/../tests/fixtures/' + Model.modelName.toLowerCase());
  
  Model.find({}).remove(function () {
    Model.create(fixtures, done)
  });
};
