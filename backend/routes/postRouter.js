import express from 'express'
import { createPost, getMemory, updatePost } from '../controller/postController.js'
const router = express.Router()

router.route('/').get(getMemory)
router.route('/').post(createPost)
router.route('/:id').patch(updatePost)


export default router 