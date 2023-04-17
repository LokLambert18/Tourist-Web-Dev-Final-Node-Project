import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import path from 'path';
import fs from 'fs';
import multer from 'multer';

import userController from './users/users-controllers.js';
import reviewsControllers from './reviews/reviews-controllers.js';
import hotelsControllers from './hotels/hotels-controllers.js';

// Paste DB link below
const CONNECTION_STRING =
	'mongodb+srv://touristadmin:Northeastern%40123@cluster0.plzhu7r.mongodb.net/test'

mongoose.connect(CONNECTION_STRING);
// mongoose.connect('mongodb://127.0.0.1:27017/Tourist')

const app = express();

app.use(
	cors()
)

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	session({
		key: '_id',
		secret: 'tourist',
		resave: false,
		saveUninitialized: false,
		cookie: {
			expires: 60 * 60 * 24,
		},
	})
);
app.use(express.json());

userController(app);
reviewsControllers(app);
hotelsControllers(app);

app.listen(4000, () => {
	console.log(`Server running on port 4000 since ` + Date());
});
