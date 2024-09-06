import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import app from "../app.js";

const connectDB = ( async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`)
        app.on("error", (error)=>{
            console.log("Error: ", error);
            throw error
        })
    }catch(error){
        console.log("MONGODB connection failed", error)
        process.exit(1)
    }
})


export default connectDB