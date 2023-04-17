import reviewsModel from './reviews-model.js';

export const createReview = async (Review) => {
	const addedReview = await reviewsModel.create(Review);
	return addedReview;
};

export const findAllReviews = async () => {
	const allReviews = await reviewsModel.find();
	return allReviews;
};

export const findReviewByAuthorLoc = async (aId, lId) => {
	const selectedReview = await reviewsModel.findOne({
		authorId: aId,
		locId: lId,
	});
	return selectedReview;
};

export const findReviewByAuthorGuide = async (aId, gId) => {
	const selectedReview = await reviewsModel.findOne({
		authorId: aId,
		guideId: gId,
	});
	return selectedReview;
};

export const findReviewByAuthorHotel = async (aId, hId) => {
	const selectedReview = await reviewsModel.findOne({
		authorId: aId,
		hotelId: hId,
	});
	return selectedReview;
};

export const findReviewsByAuthorType = async (aId, type) => {
	const selectedReviews = await reviewsModel.find({
		authorId: aId,
		type: type,
	});
	return selectedReviews;
};

export const findReviewsByLoc = async (lId) => {
	const selectedReviews = await reviewsModel
		.find({ locId: lId })
		.populate('authorId')
		.exec();
	return selectedReviews;
};

export const findReviewsByHotel = async (hId) => {
	const selectedReviews = await reviewsModel
		.find({ hotelId: hId })
		.populate('authorId')
		.exec();
	return selectedReviews;
};

export const findReviewsByGuide = async (gId) => {
	const selectedReviews = await reviewsModel
		.find({ guideId: gId })
		.populate('authorId')
		.exec();
	return selectedReviews;
};

export const findReviewsByAuthor = async (aId) => {
	const selectedReviews = await reviewsModel
		.find({ authorId: aId })
		.populate('authorId')
		.populate('hotelId')
		.populate('guideId')
		.exec();
	return selectedReviews;
};

export const findReviewsByType = async (type) => {
	const selectedReviews = await reviewsModel.find({ type: type });
	return selectedReviews;
};

export const updateReview = async (ReviewIdToUpdate, updates) => {
	var myQuery = { _id: ReviewIdToUpdate };
	var newValues = { $set: { text: updates.text, postTime: Date() } };
	const updatedReview = await reviewsModel.updateOne(myQuery, newValues);
	return updates;
};

export const findLocationReviews = async () => {
	const allReviews = await reviewsModel
		.find({ type: 1 })
		.sort({ postTime: 1 })
		.limit(10)
		.populate('authorId')
		.populate('hotelId')
		.populate('guideId')
		.exec();
	return allReviews;
};

export const findHotelReviews = async () => {
	const allReviews = await reviewsModel
		.find({ type: 3 })
		.sort({ postTime: 1 })
		.limit(10)
		.populate('authorId')
		.populate('hotelId')
		.populate('guideId')
		.exec();
	return allReviews;
};

export const findGuideReviews = async () => {
	const allReviews = await reviewsModel
		.find({ type: 2 })
		.sort({ postTime: 1 })
		.limit(10)
		.populate('authorId')
		.populate('hotelId')
		.populate('guideId')
		.exec();
	return allReviews;
};
