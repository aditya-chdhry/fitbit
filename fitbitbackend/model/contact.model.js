const mongoose = require("mongoose");

const contact = mongoose.Schema({
    name : {
        type : String,
        require : true,
        trim :  true
    },
    email : String,
    message : String
})

const Contact = mongoose.model("Contact", contact);  


module.exports = { Contact };
