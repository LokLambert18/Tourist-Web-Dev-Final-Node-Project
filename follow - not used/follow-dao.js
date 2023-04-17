import followModel from './follow-model.js';
import usersModel from '../users/users-model.js'

export const createFollow = async (follow) => {
	const addedFollow = await followModel.create(follow);

	var myQuery = { _id: follow.fromId};
	var newValues = { $set: { following: $following + 1 } };
	await usersModel.updateOne(myQuery, newValues);

	var myQuery = { _id: follow.toId};
	var newValues = { $set: { followers: $followers + 1 } };
	await usersModel.updateOne(myQuery, newValues);

	return addedFollow;
};

export const findFollowByIds = async (fromId, toId) => {
	const selectedFollow = await followModel.findOne({
		fromId: fromId,
		toId: toId,
	});
	return selectedFollow;
};

export const deleteFollow = async (Follow) => {
	// const addedFollow = await followModel.create(Follow);
	// return addedFollow;
};