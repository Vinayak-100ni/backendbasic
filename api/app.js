import express from "express";
import userRouter from "./router/user.js"
import { config } from "dotenv";


export const app =express();

config({
    path:"./data/config.env"
})

//using middleware.
app.use(express.json());
app.use("/user",userRouter);


