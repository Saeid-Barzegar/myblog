import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, },
  email: { type: String, unique: true, required: true, trim: true, },
  password: { type: String, required: true, trim: true },
  access: { type: String, required: true, default: 'user' },
}, {
  timestamps: true,
});

userSchema.plugin(mongoosePaginate);

// userSchema.virtual('articles's , {
//     ref : 'Article',
//     localField : '_id',
//     foreignField : 'user'
// })

export default mongoose.model('User' , userSchema);