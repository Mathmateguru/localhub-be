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
  location: String,
  image: {
    type: String,
  },
  
//   members: [{
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//   }],
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
});


const Community = mongoose.model('Community', communitySchema);
export default Community;