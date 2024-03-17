const User = require('../models/user');
const Post = require('../models/post');

const resolvers = {
  getUser: async ({ id }) => {
    return await User.findById(id).populate('following').populate('posts');
  },
  getPostsByUser: async ({ userId }) => {
    return await Post.find({ userId });
  },
  createUser: async ({ username, password }) => {
    const newUser = new User({ username, password });
    return await newUser.save();
  },
  createPost: async ({ content, userId }) => {
    const newPost = new Post({ content, userId });
    return await newPost.save();
  },
};

module.exports = resolvers;
