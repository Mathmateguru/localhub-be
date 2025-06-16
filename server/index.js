import express from 'express'
import connectDB from './db.js'
import dotenv from 'dotenv'
import { createCommunity, getCommunties } from './controllers/community.js'
import { createPost, getPost } from './controllers/post.js'
import { createUser, getUsers} from './controllers/user.js'
dotenv.config()
const app = express()



const port = process.env. PORT || 4000
connectDB()


app.use(express.json()) // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })) // Middleware to parse URL-encoded bodies
app.get('/', (req, res) => {
    res.send({message: 'Welcome to the Community API'})
})

app.post('/community', createCommunity)
app.get('/community', getCommunties)
app.post('/post', createPost)
app.get('/post', getPost)
app.post('/user', createUser)
app.get('/user', getUsers)

//app.get
// app.post('/user', (req, res) => {})
// app.put()
// app.delete()




app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))




