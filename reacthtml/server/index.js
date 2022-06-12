const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const FoodeModel = require('./models/Food');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://olduser:password_12@cluster0.8nsb3dc.mongodb.net/food?retryWrites=true&w=majority", {
   useNewUrlParser: true,
});

app.post("/insert", async (req, res) => {

    const employeeName = req.body.employeeName;
    const employeeEmail = req.body.employeeEmail;
    const employeePassword = req.body.employeePassword;
    const food = new FoodeModel({employeeName: employeeName, employeeEmail: employeeEmail , employeePassword: employeePassword });
    
    try{
         await food.save();
         res.send("Inserted data");
    }catch(err){
       console.log(err);
    } 

});

app.get("/read", async (req, res) => {

   FoodeModel.find({}, (err, result) => {

        if(err){
            res.send(err);
        }
        res.send(result);
   });
  
});  

app.delete("/delete/:id", async (req, res )=> {
    const id = req.params.id;
    await FoodeModel.findByIdAndRemove(id).exec();
   
    res.send("deleted");
})

app.listen(3000, ()=> {
   console.log('Server running on port 3000');
});