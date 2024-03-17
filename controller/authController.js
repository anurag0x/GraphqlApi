const bcrypt = require('bcrypt');
const { users } = require('../utils/data');
const jwt = require('jsonwebtoken')
const User = require('../models/user');

const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (users[username]) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userId = Object.keys(users).length + 1;

    const newUser = new User(userId, username, hashedPassword);
    users[username] = newUser;

    return res.status(201).json({ message: 'User registered successfully', userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!users[username]) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = users[username];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    let token = jwt.sign({username: username}, 'token')

    res.status(200).json({ message: 'Authentication successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
