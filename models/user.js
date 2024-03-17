// src/models/User.js
const Post = require('./post');
const {users} = require("../utils/data")
class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.following = [];
        this.posts = [];
    }

    followUser(username) {
        if (!this.following.includes(username)) {
            this.following.push(username);
            return `You started following ${username}.`
        }else return `You already following ${username}`
    }

    unfollowUser(username) {
        let x = this.following.length
        this.following = this.following.filter(user => user !== username);
        let y = this.following.length
        if(x>y) return `You unfollowed ${username}`
        else return `You are not following ${username}`
    }

    createPost(content) {
        const post = new Post(`${this.username}_${this.posts.length}`, content, this.username);
        this.posts.push(post);
        return post;
    }

    getAllPosts() {
        return this.posts;
    }

    getFollowingPosts(userId) {
        let followingPosts = [];
        if(userId){
            let posts = users[userId].posts
            return posts
        }
        
        for (const followedUser of this.following) {
          let user = users[followedUser]
            if (user) {
                followingPosts = followingPosts.concat(user.posts);
            }
        }
        return followingPosts;
    }
}

module.exports = User;
