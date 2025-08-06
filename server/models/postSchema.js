import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  community: {
    type: Schema.Types.ObjectId,
    ref: 'Community'
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});


const Post = mongoose.model('Post', postSchema);
export default Post;