import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";

import connectDB from "./database/db.js";
import authRouter from "./routes/authRoute.js";
const app = express();

app.use(
  cors({
       origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

connectDB();

app.listen(process.env.PORT || 8000, () => {
  console.log("Server Running...");
});