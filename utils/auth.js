let jwt = require('jsonwebtoken');
const { users } = require('./data');

const auth = async (req, res, next) => {
    try {
        let token = req.headers.authorization
        if(!token) return res.status(401).send({ message : "unauthorized!"})
    
        token = token.split(" ")
        token = token[1]
        if(!token) return res.status(401).send({ message : "unauthorized!"})
        
        let isMatch =  jwt.verify(token, 'token')
        let user = users[isMatch.username]
        if(!user) return res.status(401).send({ message : "login required!"})
        if(!isMatch) return res.status(401).send({ message : "token expired!"})
    
        req.username = isMatch.username
        next()
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = auth