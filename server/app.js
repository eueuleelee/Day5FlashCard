var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
module.exports = app;

var publicPath = path.join(__dirname, '../public');
var indexHtmlPath = path.join(__dirname, '../index.html');

var FlashCardModel = require('./models/flash-card-model');

app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});


app.get('/cards', function (req, res) {

    var modelParams = req.query.category ? { category: req.query.category } : {};

    FlashCardModel.find(modelParams, function (err, cards) {
        setTimeout(function () {
            res.send(cards);
        }, Math.random() * 1000);
    });

});

app.post('/cards', function (req, res) {

    var card = req.body;

    FlashCardModel.create(card).then(function (createdCard) {
        res.send(createdCard);
    }, function (err) {
        res.status(500).send(err.message);
    });

});

app.put('/:id/edit', function (req, res) {
    var update = req.body;

    //mongoose doesnt always return a promise. you need to put "exec()" 
    FlashCardModel.findByIdAndUpdate(req.params.id, update).exec().then(function (updatedCard) {
      res.send(updatedCard);
    }, function (err) {
      res.status(500).send(err.message)
    })
})

app.delete('/:id/delete', function (req, res) {

    FlashCardModel.findByIdAndRemove(req.params.id).exec().then(function () {
      res.send("Successfully removed!");
    }, function (err) {
      res.status(500).send(err.message)
    })
})
