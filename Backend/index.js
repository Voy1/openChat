import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import userRoute from "./routes/user.route.js";

const app = express()

dotenv.config();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 3001;
const URI=process.env.mongoDB_URI;

try {
    mongoose.connect(URI)
    console.log("Connected to MongoDB");
} catch (error) {
    console.log(error);
}

app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})