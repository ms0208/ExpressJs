const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://127.0.0.1:27017/Manav-tut");

connect.then(()=>{
    console.log("MongoDB is connected");
})
.catch(()=>{
    console.log("Mongo DB is not connected");
})

// create a schema
const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
// create a model
const collection = new mongoose.model("users",LoginSchema);
module.exports = collection;
