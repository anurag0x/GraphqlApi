const User = require('../models/user');
const Post = require('../models/post');
const users = require("../utils/data");

const resolvers = {
  Query: {
    getUser: (_, { id }) => {
      return users[id];
    },
    getPostsByUser: (_, { userId }) => {
      return users[userId].posts;
    },
  },
  Mutation: {
    createUser: async (_, { input}) => {
      try {
        const {username, password} = input
        if (users[username]) {
          throw new Error('User already exists');
        }
        let id = Object.keys(users).length
        const newUser = new User(id,username,password);
        users[username] = newUser;
        return newUser;
      } catch (error) {
        throw new Error('Internal Server Error');
      }
    },
    createPost: (_, { input }) => {
      const { content, userId } = input;
      const newPost = users[userId].createPost(content);
      return newPost;
    },
  },
};

module.exports = resolvers;
