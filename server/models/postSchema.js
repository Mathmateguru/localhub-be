import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  
});


const CommunityPost = mongoose.model('CommunityPost', postSchema);
export default CommunityPost;