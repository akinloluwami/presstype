import { Router } from "express";
import getBlogPost from "../controllers/get-post";

const router = Router();

router.get("/", getBlogPost);

export default router;
