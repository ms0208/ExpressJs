const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const collection = require('./config');
// to use ejs file 
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
// convert data to json 
app.use(express.json());

app.use(express.static('public'));
app.get('/',(req,resp)=>{
    resp.render("login");
})
app.get('/signup',(req,resp)=>{
    resp.render("signup");
})

app.post('/signup',(req,resp)=>{
    const data = {
        name: req.body.username,
        password: req.body.password
    }
    collection.insertMany(data)
    .then(userdata => {
        console.log(userdata);
        resp.send('User data inserted successfully');
    })
    .catch(err => {
        console.error('Error inserting user data:', err);
        resp.status(500).send('Error inserting user data');
    });
})
const port = 5000;
app.listen(port, ()=>{
    console.log(`Server is connected on port : ${port}`);
})