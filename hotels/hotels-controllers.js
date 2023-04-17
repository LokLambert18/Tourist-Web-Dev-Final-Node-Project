import * as HotelDao from './hotels-dao.js';

const createHotel = async (req, res) => {
	const newHotel = req.body;
	console.log('In CreateHotel');
	const addedHotel = await HotelDao.createHotel(newHotel);
	// req.session.Hotel = addedHotel
	res.send(addedHotel);
};

const findAllHotels = async (req, res) => {
	const allHotels = await HotelDao.findAllHotels();
	res.send(allHotels);
};

const updateHotel = async (req, res) => {
	const hotelToUpdate = req.params.hid;
	const updates = req.body;
	console.log('updateHotel');

	const updatedHotel = await HotelDao.updateHotel(hotelToUpdate, updates);

	console.log(updatedHotel);
	res.send(updatedHotel);
};

const deleteHotel = async (req, res) => {
	console.log('deleteHotel');

	const hotelToDelete = req.params.hid;
	const deletedHotel = await HotelDao.deleteHotel(hotelToDelete);

	// hotels = hotels.filter((t) =>
	// t._id !== HotecityToDelete);
	// res.sendStatus(200);

	console.log(deletedHotel);
	res.send(deletedHotel);
};

const findHotelsByCity = async (req, res) => {
	console.log('findHotelsByCity');

	const city = req.body.city;
	console.log(city);

	const selectedHotels = await HotelDao.findHotelsByCity(city);
	console.log(selectedHotels);
	res.send(selectedHotels);
};

const findHotelById = async (req, res) => {
	console.log('findHotelById');

	const hid = req.body.hid;
	console.log(hid);

	const selectedHotel = await HotelDao.findHotelById(hid);
	console.log(selectedHotel);
	res.send(selectedHotel);
};

const findHotelsByManager = async (req, res) => {
	const mid = req.body.mid;
	console.log(mid);

	const selectedHotels = await HotelDao.findHotelsByManager(mid);
	console.log(selectedHotels);
	res.send(selectedHotels);
};

const addHotelRequest = async (req, res) => {
	console.log('addHotelRequest');

	const request = req.body;
	console.log(request);

	const response = await HotelDao.addHotelRequest(request);
	console.log(response);
	res.send(response);
};

export default (app) => {
	app.post('/hotels', createHotel);
	app.get('/hotels', findAllHotels);
	app.put('/hotels/:hid', updateHotel);
	app.delete('/hotels/:hid', deleteHotel);
	app.post('/city', findHotelsByCity);
	app.post('/manager', findHotelsByManager);
	app.post('/hid', findHotelById);
	app.put('/hrequest', addHotelRequest);
};
