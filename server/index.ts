import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectToDB from "./utils/db";
import getBlog from "./controllers/get-blog";

connectToDB;

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  getBlog;
});

app.listen(process.env.PORT, () =>
  console.log(`Sever is live on http://localhost:${process.env.PORT}`)
);
