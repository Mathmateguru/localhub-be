import { Router } from 'express';
import { createCommunity, getCommunties, getSingleCommunity, updateCommunity, deleteCommunity} from '../controllers/community.js'
import { createPost, getPost, getSinglePost, updatePost, deletePost} from '../controllers/post.js'
import { signup, getSingleUser, getUsers, updateUser, deleteUser} from '../controllers/user.js'

const router = Router()

router.post('/community', createCommunity)
      .get('/community', getCommunties);

router.get('/community/:id', getSingleCommunity)
      .put('/community/:id', updateCommunity)
      .delete('/community/:id', deleteCommunity);

router.post('/post', createPost)
      .get('/post', getPost);

router.get('/post/:id', getSinglePost)
      .get('/post/:id', updatePost)
      .delete('/post/:id', deletePost);


router.post('/signup', signup);

router .get('/user', getUsers);

router.get('/user/:id', getSingleUser)
      .put('/user/:id', updateUser)
      .delete('/user/:id', deleteUser);



export default router