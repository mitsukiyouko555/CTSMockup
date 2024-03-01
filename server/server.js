const express = require('express')
const mongoose = require("mongoose")
const app = express()

const uri = "mongodb+srv://mitsukiyouko555:U2DBoEj9iCFbapof@mitsukiyouko555.flxow2s.mongodb.net/?retryWrites=true&w=majority&appName=mitsukiyouko555";
const Npc = require('./models/npc')

async function connect(){
    try{
        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Connected to Mongo DB");
        await Npc.create({name: "Maxus", age: 21, gender: "F"})
        console.log(await Npc.find())
    }
    catch(error){
        console.error(error);
    }
}

connect()
app.listen(8080, ()=>{
    console.log("Server Started on port 8080");
});