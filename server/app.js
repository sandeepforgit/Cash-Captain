import express from "express";
import cors from "cors";
import userRouter from "./Routes/userRoute.js";
import dotenv from "dotenv";
const app = express();

dotenv.config();

app.use(
    cors({
        origin: process.env.cors_origin,
        credentials: true,
    }),
    express.json()
)


app.use('/users', userRouter);

export { app };