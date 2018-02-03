var express = require('express');
var app = express();
var router = express.Router();

/*
router.get('/things', function(req, res) {
    res.json('GET route on things.');
});
router.post('/things', function(req, res) {
    res.json('POST route on things.');
});

app.get('/hello', function(req, res) {
    res.json("Hello World!");
});

app.post('/hello', function(req, res) {
    res.json("You just called the post method at '/hello'!\n");
});
*/
app.get('/', function(req, res){
    res.send('home');
});
app.get('/login', function(req, res){
    res.send('login page 입니다.')
});

const port = process.env.PORT || 1337;
app.listen(port);