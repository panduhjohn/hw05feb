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
    const userExists = users.filter(
        user => user.id === parseInt(req.params.id)
    );
    console.log(userExists);

    if (userExists.length !== 0) {
        return res.status(200).json(userExists[0]);
    } else {
        return res
            .status(400)
            .json({ message: `User with id: ${req.params.id} does not exist` });
    }
});

//Create User
router.post('/', (req, res) => {
    if (!req.body.name || !req.body.email) {
        return res.status(400).json({ message: 'Enter name and email' });
    }
    const newUser = {};
    newUser.id = uuid();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    users.push(newUser);
    return res.json(req.body);
});

module.exports = router;
