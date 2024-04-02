var express = require('express');
var app = express();
app.get('/',function(req,resp){
    resp.send("Hello World");
});
var server = app.listen(4002);