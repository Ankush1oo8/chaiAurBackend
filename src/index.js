// require ("dotenv").config(); this can cause code to look bad
import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/index.js";

dotenv.config({
    path:'/.env'
})




connectDB();