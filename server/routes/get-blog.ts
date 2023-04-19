import { Router } from "express";
import getBlog from "../controllers/get-blog";

const router = Router();

router.get("/", getBlog);

export default router;
