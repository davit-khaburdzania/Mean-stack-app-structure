var should = require('should');
    schema = Models.User.schema,

describe('User model', function () {
  describe('attributes', function () {
    var attr = schema.paths;
    it('should have name attribute', function () {
      should.exist(attr.name);
      attr.name.instance.should.equal('String');
    });

  });

  describe('static methods', function () {
    before(function (done) {
      helper.recreate(Models.User, done);
    });
  });
});
