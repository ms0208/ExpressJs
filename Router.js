var express = require('express');
var app = express();
app.get('/',function(req,resp){
    resp.send("Homepage");
})
app.get('/about',function(req,resp){
    resp.send("AboutPage");
})
app.get('/service',function(req,resp){
    resp.send("ServicePage");
})
var service = app.listen(4000);