import mongoose from 'mongoose';

const hotelsSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		manager: { type: String, required: true },
		city: { type: String, required: true },
		address: { type: String, default: '' },
		phone: { type: String, default: '' },
		website: { type: String, default: '' },
		image: { type: String, default: '' },
		requests: { type: Array, default: [] },
	},
	{ collection: 'hotels' }
);

export default hotelsSchema;
