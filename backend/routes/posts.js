import express from 'express'
import Posts from '../controller/posts'
const router = express.Router()

router.post('/list', Posts.getList);

export default router;