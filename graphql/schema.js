
const typeDefs = `#graphql
  type User {
    id: ID!
    username: String!
    posts: [Post]
    following: [String]
  }

  type Post {
    id: ID!
    content: String!
    author: User!
  }

  input LoginInput {
    username: String!
    password: String!
  }

  input PostInput {
    content: String!
    userId: ID!
  }

  type Query {
    getUser(id: ID!): User
    getPostsByUser(userId: ID!): [Post]
  }

  type Mutation {
    createUser(input: LoginInput): User
    createPost(input : PostInput): Post
  }
`;

module.exports = typeDefs;
