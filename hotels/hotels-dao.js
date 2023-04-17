import hotelsModel from './hotels-model.js';

export const createHotel = async (Hotel) => {
	const addedHotel = await hotelsModel.create(Hotel);
	return addedHotel;
};

export const findAllHotels = async () => {
	const allHotels = await hotelsModel.find();
	return allHotels;
};

export const findHotelsByCity = async (city) => {
	const selectedHotels = await hotelsModel.find({ city: city });
	return selectedHotels;
};

export const findHotelById = async (hid) => {
	const selectedHotel = await hotelsModel.findOne({ _id: hid });
	return selectedHotel;
};

export const findHotelsByManager = async (mid) => {
	const selectedHotels = await hotelsModel.find({ manager: mid });
	return selectedHotels;
};

export const updateHotel = async (hotelToUpdate, updates) => {
	var myQuery = { _id: hotelToUpdate };
	var newValues = {
		$set: {
			name: updates.name,
			city: updates.city,
			address: updates.address,
			phone: updates.phone,
			website: updates.website,
		},
	};
	const updatedHotel = await hotelsModel.updateOne(myQuery, newValues);
	return updatedHotel;
};

export const deleteHotel = async (hotelToDelete) => {
	var myQuery = { _id: hotelToDelete };

	await hotelsModel.deleteOne(myQuery);
	return hotelToDelete;
};

export const addHotelRequest = async (request) => {
	try {
		await hotelsModel.updateOne(
			{ _id: request.hId },
			{ $push: { requests: request } }
		);
		return request;
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};
