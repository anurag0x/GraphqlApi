**GraphqlApi**

This project aims to develop a robust Social Media API using NodeJS, emphasizing proficiency in Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP) concepts, ExpressJS, and GraphQL. The API will simulate fundamental functionalities of a social media platform, including user registration, content posting, and user interaction through following other users. After development, the API will be deployed to a cloud service for accessibility.

**Table of Contents**

1. Introduction
2. Features
3. Technologies Used
4. Installation
5. Usage
6. API Endpoints
7. GraphQL Endpoint
8. Contributors
9. License

**1. Introduction**

Provide a concise overview of the project, its purpose, and its main functionalities.

**2. Features**

- User registration and login with bcrypt for password hashing and JWT for authentication.
- Creation of posts by authenticated users.
- Retrieval of user's own posts and posts from users they are following.
- Following and unfollowing other users.
- GraphQL support for querying user and post data.

**3. Technologies Used**

List the technologies, libraries, and frameworks used in the project, including versions if applicable.

- Node.js
- Express.js
- bcrypt
- JWT
- GraphQL
- MongoDB (assumed based on the code provided)

**4. Installation**

Provide steps to install and set up the project locally. Include any dependencies that need to be installed.

1. Clone the repository:
   ```
   git clone https://github.com/anurag0x/GraphqlApi
   ```
2. Navigate to the project directory:
   ```
   cd GraphqlApi
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up environment variables, if necessary.
5. Start the server:
   ```
   npm start
   ```

**5. Usage**

Provide instructions on how to use the application or interact with its features.

- Register a new user using the `/register` endpoint.
- Log in with the registered user credentials using the `/login` endpoint.
- Create posts using the `/posts` endpoint.
- Retrieve user's own posts using the `/posts` endpoint.
- Retrieve posts from users they are following using the `/following/posts` endpoint.
- Follow or unfollow other users using the appropriate endpoints.

**6. API Endpoints**

- `POST /register`: Register a new user.
- `POST /login`: Authenticate and log in a user.
- `POST /posts`: Create a new post.
- `GET /posts`: Retrieve user's own posts.
- `GET /following/posts`: Retrieve posts from users the authenticated user is following.
- `GET /follow/:userId`: Follow a user by their ID.
- `GET /unfollow/:userId`: Unfollow a user by their ID.

**7. GraphQL Endpoint**

- Endpoint: `/graphql`
- Schema: Provide GraphQL schema definition.
- Resolvers: Describe available resolvers for querying and mutating data.

