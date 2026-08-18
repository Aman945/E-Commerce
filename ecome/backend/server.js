var cors= require('cors');
const express = require("express");
const app = express();
const Port = 5000;

let connectedToDb=require('./Database')
connectedToDb()
   
 let User= require('./models/User')
 
app.use(cors())
app.get('/',(req,res)=>{
    res.send("welcome to server")
})
app.listen(Port,()=>{
    console.log(`server is running on ${Port}`)

})


