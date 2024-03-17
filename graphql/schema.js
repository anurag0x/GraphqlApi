const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    username: String!
    posts: [Post]
    following: [User]
  }

  type Post {
    id: ID!
    content: String!
    user: User!
  }

  type Query {
    getUser(id: ID!): User
    getPostsByUser(userId: ID!): [Post]
  }

  type Mutation {
    createUser(username: String!, password: String!): User
    createPost(content: String!, userId: ID!): Post
  }
`);

module.exports = schema;
