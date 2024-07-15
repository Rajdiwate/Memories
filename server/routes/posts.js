import { Router } from "express";
import { getPosts , createPost , deletePost , likePost , unlikePost} from "../controllers/posts.controllers.js";

const router  = Router();

router.route('/').get(getPosts)
router.route('/').post(createPost);
router.route('/delete').post(deletePost);
router.route('/like').patch(likePost)
router.route('/unlike').patch(unlikePost)


export default router