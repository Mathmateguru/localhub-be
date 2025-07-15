import mongoose from 'mongoose';
const { Schema } = mongoose;

const communitySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  creator: {
   type: Schema.Types.ObjectId,
    ref: 'User'
  },

  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],

  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],

  isPublic: {
    type: Boolean,
    default: true
  }
});


const Community = mongoose.model('Community', communitySchema);
export default Community;