import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from 'cors';
import bodyParser from "body-parser";
import studentRouter from "./routes/student.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());
app.use("/api/student/", studentRouter)

app.listen(8000, () => {
    mongoose.set("strictQuery", false);
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log("connect to mongodb database");
        })
        .catch((err) => {
            throw err;
        });
    console.log("Listening to port 8000");
});