var UserSchema, User;

UserSchema = new mongoose.Schema({
  name: String
});

UserSchema.statics.test = function () {
  return 'test';
};

module.exports = User = mongoose.model('User', UserSchema);
