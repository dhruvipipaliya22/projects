import express from "express"
import dotenv from "dotenv"
import ConnectDB from "./db/db.js";
// import { PrismaClient } from "@prisma/client";
import accountRouter from "./router/account.router.js";
import userRouter from "./router/user.router.js";

dotenv.config({
    path:"./.env",
    quiet:true
})
ConnectDB();

const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// const prisma = new PrismaClient();

app.use("/api/accounts", accountRouter);
app.use("/api/users",userRouter);
// app.use("/api/stores", storeRouter);
// app.use("/api/products", productRouter);
// app.use("/api/orders", orderRouter);
// app.use("/api/carts", cartRouter);
// app.use("/api/payments", paymentRouter);
// app.use("/api/reviews", reviewRouter);
// app.use("/api/pages", pageRouter);

app.listen(process.env.PORT,(err)=>{
    !err ? console.log(`server started on port ${process.env.PORT}`) : null;
});