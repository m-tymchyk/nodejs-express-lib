var User = require("../models/user");

exports.createUser = function(req, res) {
  var user = {
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  };
  User.createUser(user, function(err, doc) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    // console.log(user);
    // res.send(user);
  });
};
