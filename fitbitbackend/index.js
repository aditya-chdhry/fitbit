const express = require("express");
const app = express();
const connectwithdb =require("./db");
const cors = require("cors")
const user = require("./model/user.model");
const {Contact} =require("./model/contact.model");
// const {signup} =require("./model/signup.model");

connectwithdb();
app.use(express.json())
app.use(cors())
const auth = require("./routes/auth");


// app.get('/fitbit' , async(req, res)=>{
//     let obj ={
//         username :"adii",
//         lastname :"chdhry",
//         islogin :"false",
//     }
//     res.send(obj);

// })

    app.get('/' , (req, res)=>{
        res.send("hello from back");
    })

    app.get("/users",(req,res)=>{

        const newUser = user.create({
            name : "Aditya",
            email : "aditya@gmail.com",
            password : "aditya"
    
        })
    


        res.send("all users");
    })

    app.get("/details/student", async(req,res)=>{
        const details = await user.find();
        
        console.log(details);
        res.send("details of user");

    })

    app.post("/saveContact", async (req, res) => {
        try {
            console.log(req.body);
            const { name, email, message } = req.body;
            console.log(name, email, message);
            await Contact.create({
                name,
                email,
                message
            });
            res.status(200).json({
                display: "success"
            });
        } catch (err) {
            console.log(err.message)
            res.status(400).json({
                display: "Fail"
            });
        }
    });

app.use("/auth",auth);
app.listen(8000,()=>{
    console.log("My server is running on port 8000");
})

