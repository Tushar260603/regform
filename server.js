import express from "express"
import register from "./models/RegisterSchema.js"
import mongoose from "mongoose"
import regroute from "./routes/Regroute.js"
import dotenv from "dotenv"
import cors from "cors"
import conn from "./db.js"
import path from "path"
import {fileURLToPath} from 'url'
conn();const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const app=express();
app.use(cors({
    origin:"http://localhost:3001",
    methods:["GET","POST","PUT","DELETE"],
  }))
  app.use(express.json());

app.use(express.static(path.join(__dirname,'./client/build')))




dotenv.config();




app.use("/user",regroute)


// app.post("/user",async (req,res)=>{
// console.log(req.body)

//     const newUser=await new register({
//         username:req.body.username,
//         password:req.body.password
    
//     })
    
//     await newUser.save();

// })
app.get("/",(req,res)=>{
    res.send("It Works")
})

app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
  })

app.listen(8000,()=>{

    console.log("server running on port 8000")
})





