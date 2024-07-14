import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


export const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(express.json({limit : '30mb' , extended : true}))
app.use(express.urlencoded({limit: '30mb' , extended: true}))
app.use(cookieParser())


import postRouter from './routes/posts.js'

app.use('/apiv1/posts' , postRouter)
