const User = require("./../models/userModel");

const getAllUser = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

const postUser = async (req, res) => {
  const obj = req.body;
  const newUser = new User(obj);
  newUser.save();
  res.status(200).send("success");
};

const getUserById = async (req, res) => {
  const getElem = await User.find({ _id: req.params.id });
  res.status(200).send(getElem);
};

const deleteUser = async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id });
  res.status(200).send("deleted");
};
const patchUser = async (req, res) => {
  const newUser = await User.findOneAndUpdate({ _id: req.params.id }, req.body);
  res.status(200).send(newUser);
};
const putUser = async (req, res) => {
  const newUser = await User.findOneAndReplace({ _id: req.params.id }, req.body);
  res.status(200).send(newUser);
};

module.exports = { getAllUser, postUser, getUserById, deleteUser, patchUser, putUser };
