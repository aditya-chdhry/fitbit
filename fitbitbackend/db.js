const mongoose = require("mongoose");

function connectwithdb(){
    mongoose.connect("mongodb://localhost:27017/v3nom").then(()=>{

        console.log("connected to db");
    }).catch((err)=>{
        console.log(err);
    })
}


module.exports = connectwithdb; 
