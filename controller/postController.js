const {  addPost, users } = require('../utils/data');
const Post = require('../models/post');

const createPost = (req, res) => {
  try {
    const { content } = req.body;
    let username = req.username

    if (!content || !username) {
      return res.status(400).json({ message: 'Content and user id are required' });
    }

    let user = users[username]

    let post = user.createPost(content)
    

    return res.status(201).json({ message: 'Post created successfully', post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



const getUserPosts = (req, res) => {
  try {
    const username = req.username;

    const userPosts = users[username].posts

    return res.status(200).json({ userPosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getFollowingPosts = (req, res) => {
  try {
    let user = users[req.username]
    let followingPosts = user?.getFollowingPosts(req.query.userId)
    return res.status(200).json({ followingPosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createPost,
  getUserPosts,
  getFollowingPosts,
};
