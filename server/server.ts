import express from 'express'
import puppies from './routes/puppies.ts'

const server = express()

server.use(express.json())
server.use('/api/v1/puppies', puppies)

server.get('/new', async (req, res) => {
  res.sendFile('new-puppy.html')
})

export default server
