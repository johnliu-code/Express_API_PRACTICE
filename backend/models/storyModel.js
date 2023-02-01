const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: 'This field is required...'
    },
    author: {
        type: String,
        required: 'This field is required...'
    },
    content: {
        type: Array,
        default: [],
        required: 'This field is required...'
    },
    imgurl: {
        type: String,
        required: 'This field is required...'
    },
    instagram: {
        type: String,
        required: 'This field is required...'
    }
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Story', storySchema);