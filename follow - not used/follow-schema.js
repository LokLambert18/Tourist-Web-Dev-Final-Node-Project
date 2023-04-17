import mongoose from 'mongoose';

const followSchema = mongoose.Schema(
	{
		fromId: { type: String, required: true },
		toId: { type: String, required: true },
	},
	{ collection: 'follow' }
);

export default followSchema;
