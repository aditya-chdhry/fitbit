const {Contact} =require("../model/contact.model")

async function saveContact(req, res){

    

    try{

        const{name,email,message} = req.body;

        const contact = new Contact({

            name,email,message


        }) 

        contact.save()
        res.send(200).json({

            display : "succcess" 
        })



    }

    catch(err){
        res.send(400).json({

            display : "Fail" 
        })




    }

}
