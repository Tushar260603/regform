import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const conn =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("mongodb connected")
    } catch (error) {
       console.log(error) 
    }
}

export default conn