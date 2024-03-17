const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controller/authController');
const postController = require('./controller/postController');
const userController = require('./controller/userController');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const auth = require("./utils/auth")
const { ApolloServer } = require('@apollo/server');
const {expressMiddleware } = require('@apollo/server/express4')

const app = express();

app.use(bodyParser.json());


app.get("/", (req, res) => {
  return res.json({message : "hello world!"})
})
app.post('/register', authController.registerUser);


app.post('/login', authController.loginUser);

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    uploads: true,
  });

  await server.start();
  app.use('/graphql',expressMiddleware(server))

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, async () => {
      console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
}

// app.use(auth)
app.post('/posts', postController.createPost);


app.get('/posts', postController.getUserPosts);


app.get('/following/posts', postController.getFollowingPosts);

app.get('/follow/:userId', userController.followUserHandler);

app.get('/unfollow/:userId', userController.followUserHandler);



startServer()

