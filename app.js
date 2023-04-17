import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'

import controllers from './controllers.js'
import tuitController from './tuit-controllers/index.js'
import userController from './users/users-controllers.js'
import reviewsControllers from './reviews/reviews-controllers.js'

const CONNECTION_STRING = 'mongodb+srv://touristadmin:Northeastern@123@cluster0.plzhu7r.mongodb.net/test'

// mongoose.connect(CONNECTION_STRING)
mongoose.connect('mongodb://127.0.0.1:27017/Tourist')


const app = express()

app.use(cors({
    origin: ("http://localhost:3000"),
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}
))

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
    key: "_id",
    secret: "tourist",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 *  60* 24
    }
}))
app.use(express.json())

controllers(app)
tuitController(app)
userController(app)
reviewsControllers(app)


app.listen(4000)
