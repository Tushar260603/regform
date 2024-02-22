import express from "express"
const router=express.Router();
import { Regcontroller } from "../controllers/Regcontroller.js";


 router.post("/register",Regcontroller)



export default router