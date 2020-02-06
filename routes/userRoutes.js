const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers) //* Get all users
router.get('/:id', userController.getSingleUser) //* Get single user
router.post('/', userController.createUser) //* Create User route
router.put('/:id', userController.updateUser) //* Update a user
router.delete('/:id', userController.deleteUser) //* Delete user

module.exports = router;