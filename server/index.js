import express from "express";
// import bodyParser from "body-parser";
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDb from "./DB/index.js";


// app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 3000;



  connectDb().then(() => {
    console.log("Connected to MongoDB!!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
