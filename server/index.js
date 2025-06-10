import express from 'express'
const app = express()
const port = 3000


const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'}
]


app.get('/', (req, res) => {
    res.send({userDetails: users})
})


// app.post('/user', (req, res) => {})
// app.put()
// app.delete()




app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))




