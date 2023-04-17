import * as HotelDao from './follow-dao.js';

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
	const HotecityToUpdate = req.params.rid;
	const updates = req.body;
	console.log('updateHotel');

	// const HotelIndex = follow.findIndex((t) => t._id === HotecityToUpdate)
	// follow[HotelIndex] = {...follow[HotelIndex], ...updates};
	const updatedHotel = await HotelDao.updateHotel(HotecityToUpdate, updates);

	console.log(updatedHotel);
	res.send(updatedHotel);
};

// const deleteHotel = (req, res) => {
//     const HotecityToDelete = req.params.tid;
//     follow = follow.filter((t) =>
//     t._id !== HotecityToDelete);
//     res.sendStatus(200);
// }

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

export default (app) => {
	app.post('/follow', createHotel);
	app.get('/follow', findAllHotels);
	app.put('/follow/:hid', updateHotel);
	// app.delete('/follow/:rid', deleteHotel);
	app.post('/city', findHotelsByCity);
	app.post('/manager', findHotelsByManager);
	app.post('/id', findHotelById);
};
