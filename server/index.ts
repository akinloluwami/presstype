import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectToDB from "./utils/db";
import getBlog from "./controllers/get-blog";

connectToDB;

dotenv.config();

const app = express();
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/blog", getBlog);

app.listen(process.env.PORT, () =>
  console.log(`Sever is live on http://localhost:${process.env.PORT}`)
);
