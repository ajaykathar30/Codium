import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors' 
import dotenv from "dotenv";
import connectDB from './utils/db.js';
import userRoute from './routes/user.routes.js'
dotenv.config({})


const app = express()
const port = process.env.PORT || 3000


// middleware
app.use(cors())
app.use(express.json())
app.use(cookieParser())

//routes
app.use('/api/v1/user', userRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectDB()
})