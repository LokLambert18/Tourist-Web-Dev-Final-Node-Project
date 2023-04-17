import mongoose from 'mongoose';

const usersSchema = mongoose.Schema(
	{
		username: { type: String, required: true },
		password: { type: String, required: true },
		role: { type: String, required: true },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		city: { type: String, required: true },
		bio: { type: String, default: 'About me' },
		email: { type: String, default: '' },
		phone: { type: String, default: '' },
		image: { type: String, default: '' },
		followers: { type: Array, default: [] },
		following: { type: Array, default: [] },
		places: { type: Array, default: [] },
		requests: { type: Array, default: [] },
	},
	{ collection: 'users' }
);

export default usersSchema;
