var express = require('express');
var app = express();
app.get('/', function(rep, res){
    res.send('home');
});
app.listen(3000, function(){
    console.log('3000 port')
});
