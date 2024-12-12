// require ("dotenv").config(); this can cause code to look bad
import dotenv from "dotenv"
dotenv.config({
    path:'./.env'
})
import express from "express"
import connectDB from "./db/index.js";
import {app} from "./app.js"


const port=process.env.PORT || 3000;


connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`server listening on port :${port}`);
    })
})
.catch((error)=>{
    console.log("MONGO DB CONNECTION FAILED !!!",error)
})