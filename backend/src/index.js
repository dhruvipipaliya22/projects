import express from "express"
import dotenv from "dotenv"
import ConnectDB from "./db/db.js";
import signupRouter from "./router/signup.router.js"
import loginRouter from "./router/login.router.js"

dotenv.config({
    path:"./.env",
    quiet:true
})
ConnectDB();

const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/api/signup", signupRouter);
app.use("/api/login", loginRouter);

app.listen(process.env.PORT,(err)=>{
    !err ? console.log(`server started on port ${process.env.PORT}`) : null;
})