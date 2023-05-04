import { Router } from "express";
import getBlog from "../controllers/get-blog";
import getFavicon from "../controllers/get-favicon";

const router = Router();

router.get("/", getBlog);
router.get("/favicon", getFavicon);

export default router;
