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

app.put('/artists/:id', artistsController.update);

app.delete('/artists/:id', artistsController.delete);



db.connect('mongodb://127.0.0.1:27017/myapi', function(err){
    if (err) {
        return console.log(err +"test");
        
    }
    // myAwesomeDB = database.db('artists');
    app.listen(3012, function(){
        console.log('API started');
    })
})