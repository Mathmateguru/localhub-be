import express from 'express'
import connectDB from './db.js'
import dotenv from 'dotenv'
import router from './routes/apiRoutes.js'
import cors from 'cors'
dotenv.config()
const app = express()

const port = process.env. PORT || 4000
connectDB()

app.use(cors())
app.use(express.json()) // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })) // Middleware to parse URL-encoded bodies
app.get('/', (req, res) => {
    res.send({message: 'Welcome to the Community API'})
})

app.use('/', router )



app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))




