
const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const {loginUsers} = require('./Schema');

const app = express();
const PORT = process.env.PORT || 3001

app.use(cors());
app.use(body_parser.json());

// mongoose.connect("mongodb+srv://kanish:Kanish1012@cluster0.vqkvury.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(()=>{
//     console.log("Connected to MongoDB")
// }).catch((err)=>{
//     console.log(err)
// })

async function Connection(){
    try{
        await mongoose.connect('mongodb+srv://kanish:kanish1011@cluster0.vqkvury.mongodb.net/Travelers?retryWrites=true&w=majority&appName=Cluster0');
        app.listen(PORT,()=>{
            console.log("Working the server...");
        })
    }catch(err){
        console.log(err);
    }
}
Connection();

app.get('/',(req,res)=>{
    res.send("<h1 style='text-align:center;'>Kanish</h1>");
})

app.post('/login',async(req,res)=>{
   try{
        await loginUsers.create({
                "username":req.body.username,
                "password":req.body.password
        })
        res.status(201).json({
            "massage":"Entry successfully added",
            "status":"success"
        })
   }catch(error) {
    response.status(500).json({
        "status" : "failure",
        "message" : "entry not created",
        "error" : error
    })
    }
})

