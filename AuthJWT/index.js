const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.get('/',(req,resp)=>{
    resp.json({
        message:"A simple API"
    })
})

app.post('/login',(req,resp)=>{
    const users = {
        id:1,
        username:'manav',
        password:123
    }
    jwt.sign({users},"secret key",{expiresIn:'300s'},(err,token)=>{
        resp.json({
            token
        })
    });
})

app.post('/profile',verifyToken,(req,resp)=>{
    jwt.verify(req.token,"secret Key",(err,authData) => { 
        if(err)
        {
            resp.send({result:"Invalid"});
        }
        else{
            resp.json({
                message:"Profile succesful",
                authData
            })
        }
    })
})
function verifyToken(req,resp,next){
    const bh = req.headers['Authorization'];
    if(typeof bh !== 'undefinded'){
        const bear= bh.split(' ');
        const token = br[1];
        req.token = token;
        next();
    }else{
        resp.send({
            result:'Token is not valid'
        })
    }
}
app.listen(5000,()=>{
    console.log("Server is connected")
})