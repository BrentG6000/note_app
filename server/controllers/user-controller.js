const User = require('../models/User');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const bcrypt = require('bcrypt');

require("dotenv").config();

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const token = jwt.sign({ _id: newUser._id, username: newUser.username, email: newUser.email }, process.env.JWT_SECRET);
    res.status(200).json({ result: "success", payload: { user: newUser, token: token } });
  } catch(err) {
    res.status(400).json({ message: 'Unable to create user' });
  }
}