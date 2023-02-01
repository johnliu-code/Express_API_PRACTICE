const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

/**
 * @desc Register new user
 * @path POST /api/users
 * @access Public
 */
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error('Please add all of the fields...');
    }

    //Check if user exists
    const userExists = await User.findOne({ email });
    if(userExists) {
        res.status(400);
        throw new Error('User already exists...');
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create user
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error('Invalid user data...');
    }
})

/**
 * @desc Authenticate an user
 * @path POST /api/users/login
 * @access Public
 */
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //Check email
    const user = await User.findOne({ email });

    //Check password
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error('Invalid auth info...');       
    }
})

/**
 * @desc Get an user
 * @path GET /api/users/me
 * @access Private
 */
const getUser = asyncHandler(async (req, res) => {
    const { _id, username, email } = await User.findById(req.user.id);

    res.status(200).json({
        id: _id,
        username,
        email
    })
})

/**
 * @desc Delete an user
 * @path DELETE /api/users/:id
 * @access Public
 */
const deleteUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Delete an user...'});
})

/**
 * @desc Update an user
 * @path PUT /api/users/:id
 * @access Public
 */
const updateUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Update an user...'});
})

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getUser,
    deleteUser,
    updateUser
}