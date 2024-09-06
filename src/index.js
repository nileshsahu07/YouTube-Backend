// require("dotenv").config({path:"./env"}) // it wil also work correctly but it break our code consistency.
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path:"./.env"
})

connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at ${process.env.PORT    }`)
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed !!! ",error)
})


//First approach to connect DataBase =>
/*    
import mongoose from "mongoose"; 
import { DB_NAME } from "./constants";
import express from "express"
const app  = express()
( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error: ", error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("Error: ", error)
        throw error
    }
})()
*/