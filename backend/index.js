import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors' 
import dotenv from "dotenv";
import connectDB from './utils/db.js';
import authRoute from './routes/auth.routes.js'
import contentRoute from './routes/content.routes.js'
import userRoute from './routes/user.routes.js'
import limiter from './middleware/rateLimit.js';
dotenv.config({})


const app = express()
const port = process.env.PORT || 3000




// middleware
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true, 
}));
app.use(express.json())
app.use(cookieParser())

//routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/content', contentRoute)
app.use('/api/v1/user',userRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectDB()
})