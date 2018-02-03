var express = require('express');
var app = express();
var router = express.Router();

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

const port = process.env.PORT || 1337;
app.listen(port);