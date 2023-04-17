import * as userDao from './users-dao.js';

const createUser = async (req, res) => {
	const newUser = req.body;
	console.log('In CreateUser');
	const oldUser = await userDao.checkUsername(newUser.username);
	if (oldUser) {
		res.sendStatus(403);
		return;
	}
	const addedUser = await userDao.createUser(newUser);
	// req.session.user = addedUser
	res.send(addedUser);
};

const findAllUsers = async (req, res) => {
	const allUsers = await userDao.findAllUsers();
	res.send(allUsers);
};

const findUserById = async (req, res) => {
	console.log('findUserById');
	const uid = req.body.uid;
	console.log(uid);
	const user = await userDao.findUserById(uid);
	console.log(user);
	res.send(user);
};

const updateUser = async (req, res) => {
	const userIdToUpdate = req.params.uid;
	const updates = req.body;
	console.log('updateUser');

	// const ReviewIndex = reviews.findIndex((t) => t._id === ReviewIdToUpdate)
	// reviews[ReviewIndex] = {...reviews[ReviewIndex], ...updates};
	await userDao.updateUser(userIdToUpdate, updates);
	req.session.user = updates;
	console.log(updates);
	res.send(updates);
};

// const deleteUser = (req, res) => {
//     const UserdIdToDelete = req.params.tid;
//     users = users.filter((t) =>
//     t._id !== UserdIdToDelete);
//     res.sendStatus(200);
// }

const findOneUser = async (req, res) => {
	try {
		const credentials = req.body;
		console.log(credentials);

		const selectedUser = await userDao.findOneUser(
			credentials.username,
			credentials.password,
			credentials.role
		);
		console.log(selectedUser);
		if (!selectedUser) {
			res.sendStatus(403);
			return;
		}
		req.session.user = selectedUser;
		res.send(selectedUser);
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

const findGuidesByCity = async (req, res) => {
	console.log('findGuidesByCity');

	const city = req.body.city;
	console.log(city);

	const selectedGuides = await userDao.findGuidesByCity(city);
	console.log(selectedGuides);
	res.send(selectedGuides);
};

const addFollow = async (req, res) => {
	console.log('addFollow');

	const follow = req.body;
	console.log(follow);

	const users = await userDao.addFollow(follow);
	console.log(users);
	res.send(users);
};

const unFollow = async (req, res) => {
	console.log('unFollow');

	const follow = req.body;
	console.log(follow);

	const users = await userDao.unFollow(follow);
	console.log(users);
	res.send(users);
};

const addGuideRequest = async (req, res) => {
	console.log('addGuideRequest');

	const request = req.body;
	console.log(request);

	const response = await userDao.addGuideRequest(request);
	console.log(response);
	res.send(response);
};

const checkLogin = (req, res) => {
	console.log('CheckLogin');
	console.log(req.session);
	if (req.session.user) {
		res.send({ loggedIn: true, user: req.session.user });
	} else {
		res.send({ loggedIn: false });
	}
};

const logout = async (req, res) => {
	req.session.destroy();
	res.sendStatus(200);
};

export default (app) => {
	app.post('/users', createUser);
	app.get('/users', findAllUsers);
	app.put('/users/:uid', updateUser);
	// app.delete('/users/:uid', deleteUser);
	app.post('/login', findOneUser);
	app.post('/id', findUserById);
	app.get('/login', checkLogin);
	app.post('/logout', logout);
	app.post('/guides', findGuidesByCity);
	app.put('/follow', addFollow);
	app.put('/unfollow', unFollow);
	app.put('/grequest', addGuideRequest);
};
