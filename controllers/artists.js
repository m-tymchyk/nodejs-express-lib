var Artists = require('../models/artists');

exports.all = function(req,res){
    Artists.all(function(err,docs){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
}

exports.findByName = function(req,res){
    Artists.findByName(req.params.name, function(err,doc){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
}

exports.create = function(req, res){
    var artist = {
        name: req.body.name,
        content: req.body.content

    }
    Artists.create(artist, function(err, doc){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(artist);
    })
}

exports.update = function(req, res) {
    Artists.update(req.params.name, {name: req.body.name, content: req.body.content}, function(err, result){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}

exports.delete = function(req, res) {
    Artists.delete(req.params.id, function(err, result) {
        console.log("delete: req.body: " + JSON.stringify(req.params.id));
        if(err){
            console.log(err);
            res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}