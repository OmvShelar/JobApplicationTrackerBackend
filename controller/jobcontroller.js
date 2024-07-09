
const Application = require('../models/jobmodel');

// function for add application

async function addapplication(req,res){
    console.log("req.body getapplication****",req.body);
    try{
        const application = new Application(req.body);

        const result = await application.save();
        res
            .status(200)
            .send({message:"Application added Successfully",task: result});
    } catch(error){
        res.status(500).send(error);
    }
}
// // function for get all application
async function getapplication(req, res) {
    console.log("**------**")
    try {
        result = await Application.find();
        console.log(result);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

// function for delete application
async function deleteapplication(req, res) {
    console.log(req.params.id);
    ID = req.params.id;
    try {
        const application = await Application.findByIdAndDelete(req.params.id);
        if(!application){
            res.status(400).send({message:"Application Not Found"});
        }
        res.send({task:application,message:"Application Deleted"})
    } catch (error) {
        res.status(500).send(error);
    }
}


// // function for update application

async function updateapplication(req, res) {
    console.log("updateProduct req.params.id=",req.params.id);
    console.log("updateProduct req.body",req.body);


    try{
        const application = await Application.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        });
        if (!application){
            res.status(400).send({message:"Application no found"});
        }
        res.status(200).send({message: "Application updated", task: application});
    }catch(error){
        res.status(500).send(error);
    }
}

module.exports = {
    addapplication,
    getapplication,
    deleteapplication,
    updateapplication
}
