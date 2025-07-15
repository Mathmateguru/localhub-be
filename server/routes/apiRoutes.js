import { Router } from 'express';
import { createCommunity, getCommunties, getSingleCommunity, updateCommunity, deleteCommunity} from '../controllers/community.js'
import { createPost, getPost, getSinglePost, updatePost, deletePost} from '../controllers/post.js'
import { signup, login,  getSingleUser, getUsers, updateUser, deleteUser} from '../controllers/user.js'
import {authMiddleware} from '../middlewares/auth.js'
import upload from '../middlewares/cloudinaryStorage.js'
const router = Router()

router.post('/community', authMiddleware, upload.single("image"),  createCommunity)
      .get('/community', authMiddleware, getCommunties);

router.get('/community/:id', getSingleCommunity)
      .put('/community/:id', updateCommunity)
      .delete('/community/:id', deleteCommunity);

router.post('/post', createPost)
      .get('/post', getPost);

router.get('/post/:id', getSinglePost)
      .get('/post/:id', updatePost)
      .delete('/post/:id', deletePost);


router.post('/signup', signup);
router.post('/login', login);

router .get('/user', getUsers);

router.get('/user/:id', getSingleUser)
      .put('/user/:id', updateUser)
      .delete('/user/:id', deleteUser);



export default router