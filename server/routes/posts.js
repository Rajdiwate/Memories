import { Router } from "express";
import { getPosts , createPost } from "../controllers/posts.controllers.js";

const router  = Router();

router.route('/').get(getPosts)
router.route('/').post(createPost);


export default router