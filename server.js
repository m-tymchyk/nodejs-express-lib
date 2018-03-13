var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var artistsController = require('./controllers/artists');


var db = require('./db');

var app = express();
var myAwesomeDB;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
    res.send('Hello API');
})

app.get('/artists', artistsController.all);

app.get('/artists/:id', artistsController.findById);

app.post('/artists', artistsController.create);

app.put('/artists/:id', function(req, res){
    db.get().collection('artists').update(
        {'_id': ObjectID(req.params.id)},
        {'name': req.body.name},
        function(err, result){
            if(err){
                console.log(err);
                res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )

    // var artist = artists.find(function (artist){
    //     return artist.id === Number(req.params.id);
    // })
    // artist.name = req.body.name;
    // res.sendStatus(200);
})

app.delete('/artists/:id', function(req, res){
    db.get().collection('artists').deleteOne(
        {'_id': ObjectID(req.params.id)},
        function(err, result){
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
    // artists = artists.filter(function(artist){
    //     return artist.id !== Number(req.params.id);
    // })
    // res.send(artists);
    // res.sendStatus(200);
})



db.connect('mongodb://127.0.0.1:27017/myapi', function(err){
    if (err) {
        return console.log(err +"test");
        
    }
    // myAwesomeDB = database.db('artists');
    app.listen(3012, function(){
        console.log('API started');
    })
})