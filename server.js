import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { connectDB } from './config/db.js'
import authRoutes from './routes/auth.route.js'


dotenv.config()

const app = express()

app.use(cors({
    origin: "*",
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('PERN auth backend')
})

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`)
})
