const asyncHandler = require('express-async-handler');
const Story = require('../models/storyModel');

/**
 * @desc Get stories
 * @path GET /api/stories
 * @access Private
 */

const getStories = asyncHandler(async (req, res) => {
    const stories = await Story.find({ user: req.user.id });
    res.status(200).json(stories);
})

/**
 * @desc Create stories
 * @path Create /api/stories
 * @access Private
 */

const setStory = asyncHandler(async (req, res) => {
    if(!req.body){
        res.status(400)
        throw new Error('Please add a text field...')
    }

    const story = await Story.create({ 
        user: req.user.id, 
        title: req.body.title, 
        author: req.body.author,
        content: req.body.content,
        imgurl: req.body.imgurl,
        instagram: req.body.instagram,  
    } )
    res.status(200).json(story);
})

/**
 * @desc Update a story
 * @path PUT /api/stories/:id
 * @access Private
 */

const updateStory = asyncHandler(async (req, res) => {
    const story = await Story.findById(req.params.id);

    if(!story){
        res.status(400);
        throw new Error('Story not found...');
    }

    //Check if there is an user
    if(!req.user){
        res.status(401);
        throw new Error('User not found...');
    }

    //Confirm login user matching stories user
    if(story.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized...');
    }

    const updatedStory = await Story.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedStory);
})

/**
 * @desc Delete a story
 * @path GET /api/stories/:id
 * @access Private
 */

const deleteStory = asyncHandler(async (req, res) => {
    const story = await Story.findById(req.params.id);

    if(!story){
        res.status(400);
        throw new Error('Story not found...');
    }

    //Check if there is an user
    if(!req.user){
        res.status(401);
        throw new Error('User not found...');
    }
    
    //Confirm login user matching stories user
    if(story.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized...');
    }

    story.remove();

    res.status(200).json({ id: req.params.id});
})


module.exports = {
    getStories,
    setStory,
    updateStory,
    deleteStory
}