var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");

var userController = require("../controllers/user");

// Register
router.get("/register", function(req, res) {
  res.render("register");
});

// Login
router.get("/login", function(req, res) {
  res.render("login");
});

router.post("/register", function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  console.log(req.body);
  req.checkBody("name", "Name is required").notEmpty();
  req.checkBody("email", "Email is required").notEmpty();
  req.checkBody("email", "Email is not valid").isEmail();
  req.checkBody("username", "Username is required").notEmpty();
  req.checkBody("password", "Password is required").notEmpty();
  req.checkBody("password", "Password is required").equals(req.body.password);

  var errors = req.validationErrors();
  if (errors) {
    res.render("register", {
      errors: errors
    });
  } else {
    express().post("/users", userController.createUser);

    res.redirect("/viewusers/login");
    req.flash("success_msg", "You are registered and can now login");
  }
});

module.exports = router;
