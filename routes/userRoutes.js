const express = require('express');
const router = express.Router();
const users = require('../models/Users');
const uuid = require('uuid/v4');

//get all users
router.get('/', (req, res) => {
    res.json(users);
});

// Get single user
router.get('/:id', (req, res) => {
    const userExists = users.filter(user => user.id === req.params.id);

    if (userExists.length !== 0) {
        return res.status(200).json(userExists[0]);
    } else {
        return res
            .status(400)
            .json({ message: `User with id: ${req.params.id} does not exist` });
    }
});

//Create User route
router.post('/', (req, res) => {
    if (!req.body.name || !req.body.email) {
        return res.status(400).json({ message: 'Enter name and email' });
    }
    //create new user object and push to array
    const newUser = {};
    newUser.id = uuid();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    users.push(newUser);
    return res.json(req.body);
});

//update a user
router.put('/:id', (req, res) => {
    const userExists = users.filter(user => user.id === req.params.id);
    // console.log(userExists);
    if (userExists.length !== 0) {
        const updatedUser = req.body;
        // console.log(updatedUser);
        if (userExists[0].id === req.params.id) {
            userExists[0].name = updatedUser.name
                ? updatedUser.name
                : userExists[0].name;
            userExists[0].email = updatedUser.email
                ? updatedUser.email
                : userExists[0].email;
            return res
                .status(200)
                .json({ message: 'User Updated', user: userExists[0] });
        }
    } else {
        return res
            .status(400)
            .json({ message: `User with id: ${req.params.id} does not exist` });
    }
});

//Delete user
router.delete('/:id', (req, res) => {
    const userExists = users.filter(user => user.id === req.params.id);
    const user = userExists[0];

    if (userExists.length !== 0) {
        const deletedUser = users.indexOf(user);
        users.splice(deletedUser, 1);
        return res.status(200).json({ message: 'User deleted', user });
    } else {
        return res
            .status(400)
            .json({ message: `User with id: ${req.params.id} does not exist` });
    }
});

module.exports = router;
