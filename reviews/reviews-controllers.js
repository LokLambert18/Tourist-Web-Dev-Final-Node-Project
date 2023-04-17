import * as ReviewDao from './reviews-dao.js';

const createReview = async (req, res) => {
	const newReview = req.body;
	console.log('In CreateReview');
	const addedReview = await ReviewDao.createReview(newReview);
	// req.session.Review = addedReview
	res.send(addedReview);
};

const findAllReviews = async (req, res) => {
	const allReviews = await ReviewDao.findAllReviews();
	res.send(allReviews);
};

const updateReview = async (req, res) => {
	const ReviewIdToUpdate = req.params.rid;
	const updates = req.body;
	console.log('updateReview');

	// const ReviewIndex = reviews.findIndex((t) => t._id === ReviewIdToUpdate)
	// reviews[ReviewIndex] = {...reviews[ReviewIndex], ...updates};
	const updatedReview = await ReviewDao.updateReview(
		ReviewIdToUpdate,
		updates
	);

	console.log(updatedReview);
	res.send(updatedReview);
};

// const deleteReview = (req, res) => {
//     const ReviewIdToDelete = req.params.tid;
//     reviews = reviews.filter((t) =>
//     t._id !== ReviewIdToDelete);
//     res.sendStatus(200);
// }

const findReviewByAuthorLoc = async (req, res) => {
	const ids = req.body;

	console.log('findReviewByIds');
	console.log(ids);

	const selectedReviews = await ReviewDao.findReviewByAuthorLoc(
		ids.aId,
		ids.lId
	);
	console.log(selectedReviews);
	res.send(selectedReviews);
};

const findReviewByAuthorHotel = async (req, res) => {
	const ids = req.body;

	console.log('findReviewByIds');
	console.log(ids);

	const selectedReviews = await ReviewDao.findReviewByAuthorHotel(
		ids.aId,
		ids.hId
	);
	console.log(selectedReviews);
	res.send(selectedReviews);
};

const findReviewByAuthorGuide = async (req, res) => {
	const ids = req.body;

	console.log('findReviewByIds');
	console.log(ids);

	const selectedReviews = await ReviewDao.findReviewByAuthorGuide(
		ids.aId,
		ids.gId
	);
	console.log(selectedReviews);
	res.send(selectedReviews);
};

const findReviewsByAuthorType = async (req, res) => {
	const ids = req.body;

	console.log('findReviewsByAuthorType');
	console.log(ids);

	const selectedReviews = await ReviewDao.findReviewsByAuthorType(
		ids.aId,
		ids.type
	);
	console.log(selectedReviews);
	res.send(selectedReviews);
};

const findReviewsByLoc = async (req, res) => {
	console.log('findReviewsByLoc');

	const lId = req.body.lId;
	console.log(lId);

	const selectedReviews = await ReviewDao.findReviewsByLoc(lId);
	console.log(selectedReviews);
	res.send(selectedReviews);
};

const findReviewsByHotel = async (req, res) => {
	console.log('findReviewsByHotel');

	const hId = req.body.hId;
	console.log(hId);

	const selectedReviews = await ReviewDao.findReviewsByHotel(hId);
	console.log(selectedReviews);
	res.send(selectedReviews);
};

const findReviewsByGuide = async (req, res) => {
	console.log('findReviewsByGuide');

	const gId = req.body.gId;
	console.log(gId);

	const selectedReviews = await ReviewDao.findReviewsByGuide(gId);
	console.log(selectedReviews);
	res.send(selectedReviews);
};

const findReviewsByAuthor = async (req, res) => {
	const aId = req.body.aId;
	console.log('findReviewsByAuthor');
	console.log(aId);

	const selectedReviews = await ReviewDao.findReviewsByAuthor(aId);
	console.log(selectedReviews);
	res.send(selectedReviews);
};

const findReviewsByType = async (req, res) => {
	const type = req.body.aId;
	console.log(type);

	const selectedReviews = await ReviewDao.findReviewsByType(type);
	console.log(selectedReviews);
	res.send(selectedReviews);
};

const findHotelReviews = async (req, res) => {
	console.log('findHotelReviews');

	// const hId = req.body.hId;
	// console.log(hId);

	const selectedReviews = await ReviewDao.findHotelReviews();
	console.log(selectedReviews);
	res.send(selectedReviews);
};

const findLocationReviews = async (req, res) => {
	console.log('findLocationReviews');

	// const hId = req.body.hId;
	// console.log(hId);

	const selectedReviews = await ReviewDao.findLocationReviews();
	console.log(selectedReviews);
	res.send(selectedReviews);
};

const findGuideReviews = async (req, res) => {
	console.log('findGuideReviews');

	// const hId = req.body.hId;
	// console.log(hId);

	const selectedReviews = await ReviewDao.findGuideReviews();
	console.log(selectedReviews);
	res.send(selectedReviews);
};

export default (app) => {
	app.post('/reviews', createReview);
	app.get('/reviews', findAllReviews);
	app.put('/reviews/:rid', updateReview);
	// app.delete('/reviews/:rid', deleteReview);
	app.post('/locAuthor', findReviewByAuthorLoc);
	app.post('/hotelAuthor', findReviewByAuthorHotel);
	app.post('/guideAuthor', findReviewByAuthorGuide);
	app.post('/locid', findReviewsByLoc);
	app.post('/authorid', findReviewsByAuthor);
	app.post('/hotelid', findReviewsByHotel);
	app.post('/guideid', findReviewsByGuide);
	app.post('/type', findReviewsByType);
	app.get('/hotelReviews', findHotelReviews);
	app.get('/locReviews', findLocationReviews);
	app.get('/guideReviews', findGuideReviews);
	app.post('/authortype', findReviewsByAuthorType);
};
