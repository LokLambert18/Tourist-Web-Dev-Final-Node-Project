import usersModel from './users-model.js';

export const createUser = async (user) => {
	const addedUser = await usersModel.create(user);
	return addedUser;
};

export const findAllUsers = async () => {
	const allUsers = await usersModel.find();
	return allUsers;
};

export const findOneUser = async (un, pwd, rl) => {
	console.log(rl);
	const selectedUser = await usersModel.findOne({
		username: un,
		password: pwd,
		role: rl,
	});
	return selectedUser;
};

export const checkUsername = async (un) => {
	const selectedUser = await usersModel.findOne({ username: un });
	return selectedUser;
};

export const findUserById = async (uid) => {
	const selectedUser = await usersModel.findOne({ _id: uid });
	return selectedUser;
};

export const findGuidesByCity = async (city) => {
	const selectedUsers = await usersModel.find({ city: city, role: '2' });
	return selectedUsers;
};

export const addFollow = async (follow) => {
	try {
		const fromUser = {
			fromId: follow.fromId,
			fromFname: follow.fromFname,
			fromLname: follow.fromLname,
		};
		const toUser = {
			toId: follow.toId,
			toFname: follow.toFname,
			toLname: follow.toLname,
		};
		await usersModel.updateOne(
			{ _id: follow.fromId },
			{ $push: { following: toUser } }
		);
		await usersModel.updateOne(
			{ _id: follow.toId },
			{ $push: { followers: fromUser } }
		);
		return { fromUser, toUser };
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

export const unFollow = async (follow) => {
	try {
		const fromUser = {
			fromId: follow.fromId,
			fromFname: follow.fromFname,
			fromLname: follow.fromLname,
		};
		const toUser = {
			toId: follow.toId,
			toFname: follow.toFname,
			toLname: follow.toLname,
		};
		await usersModel.updateOne(
			{ _id: follow.fromId },
			{ $pull: { following: toUser } }
		);
		await usersModel.updateOne(
			{ _id: follow.toId },
			{ $pull: { followers: fromUser } }
		);
		return { fromUser, toUser };
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

export const updateUser = async (userIdToUpdate, updates) => {
	var myQuery = { _id: userIdToUpdate };
	var newValues = {
		$set: {
			firstName: updates.firstName,
			lastName: updates.lastName,
			bio: updates.bio,
			city: updates.city,
			email: updates.email,
			phone: updates.phone,
		},
	};
	await usersModel.updateOne(myQuery, newValues);
	// return updatedUser;
};

export const addGuideRequest = async (request) => {
	try {
		await usersModel.updateOne(
			{ _id: request.gId },
			{ $push: { requests: request } }
		);
		return request;
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};
