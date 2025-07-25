import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  
  password:{
    type: String,
    required: true,
    minLength: 3,
  },

  picture: {
    type: String,
    default: ''
  },
  
}, {timestamps: true });


const User = mongoose.model('User', userSchema);
export default User;
