import mongoose from 'mongoose';

const reviewsSchema = mongoose.Schema(
	{
		authorId: { type: mongoose.Schema.Types.ObjectId, 
					ref: 'UsersModel',
					required: true },
		// username: { type: String, required: true },
		// firstName: { type: String, required: true },
		// lastName: { type: String, required: true },
		// image: { type: String },
		locId: { type: String },
		locName: { type: String },
		locCity: { type: String },
		hotelId: { type: mongoose.Schema.Types.ObjectId, 
			ref: 'hotelsModel' },
		// hotelName: { type: String },
		// hotelCity: { type: String },
		guideId: { type: mongoose.Schema.Types.ObjectId, 
			ref: 'UsersModel' },
		// guideName: { type: String },
		// guideCity: { type: String },
		type: { type: Number, required: true },
		text: { type: String, required: true },
		postTime: { type: Date, default: Date() },
	},
	{ collection: 'reviews' }
);

export default reviewsSchema;
