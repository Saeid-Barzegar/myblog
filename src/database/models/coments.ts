import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const comentSchema = new mongoose.Schema({
  title: { type: String, trim: true,},
  coment: { type: String, required: true, trim: true,},
  writer: {
    _id: { type: String, required: true },
    name: { type: String, required: true },
  }
}, {
  timestamps: true,
});

export default mongoose.model('Coment' , comentSchema);