var express = require('express');
var app = express();
app.use(express.static(__dirname + '/client', {
    maxAge: 20
}));
app.listen(3000);