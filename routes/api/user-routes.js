const router = require('express').Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/user-controller');

// Set up GET all and Post at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// GET user by id, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);
  

module.exports = router;