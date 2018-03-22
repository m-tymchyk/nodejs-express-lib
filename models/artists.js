var db = require('../db');
var ObjectID = require('mongodb').ObjectID;


exports.all = function (cb) {
    db.get().collection('artists').find().toArray(function(err,docs){
        cb(err, docs);
    })
}

exports.findByName = function (name,cb) {
    db.get().collection('artists').findOne( { name: name }, function(err,doc){
        cb(err, doc);
    })
}

exports.create = function (artist, cb) {
    db.get().collection('artists').insert(artist, function(err,doc){
        cb(err, doc);
    })
}

exports.update = function (name, newData, cb) {
    db.get().collection('artists').update(
        {
            name: name
        },
        newData,
        function(err, result){
            cb(err, result);
        }
    )
}

exports.delete = function(id, cb) {
    db.get().collection('artists').deleteOne(
        {_id: ObjectID(id)},
        function(err, result){
            cb(err, result);
        }
    )
}