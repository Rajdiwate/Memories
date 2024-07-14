import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})


connectDB().then(()=>{
    app.listen(process.env.PORT , ()=>{
        console.log("app listening")
    })
}

).catch((error)=>{
    console.log("DB connection failed")
    throw error
})