const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controller/authController');
const postController = require('./controller/postController');
const userController = require('./controller/userController');
const auth = require("./utils/auth")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get("/", (req, res) => {
  return res.json({message : "hello world!"})
})
app.post('/register', authController.registerUser);


app.post('/login', authController.loginUser);

app.use(auth)
app.post('/posts', postController.createPost);


app.get('/posts', postController.getUserPosts);


app.get('/following/posts', postController.getFollowingPosts);

app.get('/follow/:userId', userController.followUserHandler);

app.get('/unfollow/:userId', userController.followUserHandler);



// app.use('/graphql', graphqlHTTP({
//   schema,
//   rootValue: resolvers,
//   graphiql: true,
// }));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


