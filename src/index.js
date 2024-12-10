// require ("dotenv").config(); this can cause code to look bad
import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/index.js";

dotenv.config({
    path:'/.env'
})

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