import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    cat: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
}, {timestamps: true})

const PostModel = mongoose.model('Post', PostSchema)

export default PostModel