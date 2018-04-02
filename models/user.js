var db = require("../db");

exports.createUser = function(user, cb) {
  db
    .get()
    .collection("users")
    .insert(user, function(err, doc) {
      cb(err, doc);
    });
};
