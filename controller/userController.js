const { users } = require('../utils/data');

const followUserHandler = (req, res) => {
  const { userId } = req.params;
  let user = users[req.username]
  let userToFollw = users[userId]
  if(!user) return res.status(404).send({message : "user not fount!"})
  const success = user.followUser(userId);
  if (success) {
    res.status(200).json({ message: success });
  } else {
    res.status(404).json({ message: userId +' not found' });
  }
};

const unfollowUserHandler = (req, res) => {
  const { userId } = req.params;
  let user = users[req.username]
  if(!user) return res.status(404).send({message : "user not fount!"})
  const success = user.unfollowUser(userId);
  if (success) {
    res.status(200).json({ message: success });
  } else {
    res.status(404).json({ message: userId+' not found' });
  }
};

module.exports = {
  
  followUserHandler,
  unfollowUserHandler,
};
