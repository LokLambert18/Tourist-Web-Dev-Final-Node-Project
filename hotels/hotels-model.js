import mongoose from 'mongoose';
import hotelsSchema from './hotels-schema.js';

const hotelsModel = mongoose.model('hotelsModel', hotelsSchema);

export default hotelsModel;
