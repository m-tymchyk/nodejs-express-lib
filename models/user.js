var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var db = require("../db");

// User Schema
var UserSchema = mongoose.Schema({
  username: {
    type: String,
    index: true
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  name: {
    type: String
  }
});

var User = (module.exports = mongoose.model("User", UserSchema));

module.exports.createUser = function(newUser, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      db
        .get()
        .collection("users")
        .insert(newUser, function(err, doc) {
          console.log(doc);
        });
      console.log(newUser);
    });
  });
};
