var express = require("express");
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;
var postsController = require("./controllers/posts");
var db = require("./db");
var passport = require("passport");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("."));
app.use(express.static(__dirname + "/assets"));

app.get("/", function(req, res) {
  res.render("login.ejs");
});

app.get("/posts", postsController.all);

app.get("/posts/:title", postsController.findByTitle);

app.get("/viewPost/:name", function(req, res) {
  res.render("post.ejs");
});

app.get("/writepost", function(req, res) {
  res.render("writepost.ejs");
});

// app.post(
//   "/auth",
//   passport.authenticate("local", {
//     successRedirect: "/posts",
//     failureRedirect: "/"
//   }),

//   function(req, res) {
//     res.sendStatus(200);
//   }
// );

app.post("/posts", postsController.create);

app.post("/users", postsController.createLogin);

app.put("/posts/:title", postsController.update);

app.delete("/posts/:id", postsController.delete);

db.connect("mongodb://127.0.0.1:27017/myapi", function(err) {
  if (err) {
    return console.log(err + "test");
  }
  app.listen(3012, function() {
    console.log("API started");
  });
});
