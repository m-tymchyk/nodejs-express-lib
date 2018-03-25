var Posts = require("../models/posts");

exports.all = function(req, res) {
  Posts.all(function(err, docs) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
};

exports.findByTitle = function(req, res) {
  Posts.findByTitle(req.params.title, function(err, doc) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
    console.log(__dirname);
  });
};

exports.create = function(req, res) {
  var post = {
    title: req.body.title,
    topic: req.body.topic,
    content: req.body.content,
    rating: req.body.rating,
    hash_post: req.body.hash_post
  };
  Posts.create(post, function(err, doc) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(post);
  });
};

exports.createLogin = function(req, res) {
  var user = {
    user: req.body.user,
    pwd: req.body.pwd
  };
  Posts.createLogin(user, function(err, doc) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    console.log(user);
    res.send(user);
  });
};

exports.update = function(req, res) {
  Posts.update(
    req.params.title,
    {
      title: req.body.title,
      topic: req.body.topic,
      content: req.body.content,
      rating: req.body.rating,
      hash_post: req.body.hash_post
    },
    function(err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      }
      res.sendStatus(200);
    }
  );
};

exports.delete = function(req, res) {
  Posts.delete(req.params.title, function(err, result) {
    console.log(req.params.title);
    console.log("delete: req.body: " + JSON.stringify(req.params.title));
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};
