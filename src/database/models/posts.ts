import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  image: { type: String, required: true},
  content: { type: String, required: true, trim: true },
  creator: {
    _id: { type: String, required: true },
    name: { type: String, required: true },
  }
}, {
  timestamps: true,
});

postSchema.plugin(mongoosePaginate);

// postSchema.virtual('articles's , {
//     ref : 'Article',
//     localField : '_id',
//     foreignField : 'user'
// })

module.exports = mongoose.model('Post' , postSchema);