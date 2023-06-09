import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectToDB from "./utils/db";
import getBlog from "./controllers/get-blog";
import getBlogPost from "./controllers/get-post";
import getFavicon from "./controllers/get-favicon";

connectToDB;

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser());

app.use("/blog", getBlog);
app.use("/post", getBlogPost);
app.use("/favicon", getFavicon);

app.listen(process.env.PORT, () =>
  console.log(`Sever is live on http://localhost:${process.env.PORT}`)
);
