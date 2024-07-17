const mongoose = require("mongoose");

const UserSc = mongoose.Schema({
    name : {
        type : String,
        require : true,
        trim :  true
    },
    email : String,
    password : String
})

const user = mongoose.model("users", UserSc);   


module.exports = user;
