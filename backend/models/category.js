import mongoose, { Mongoose } from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
  title:{
    type:String,
    required:true
  },
 question:{
    type:Mongoose.Schema.Types.ObjectId,
    ref:'Question',
    required:true
  },
},{timestamps:true});
const Category=mongoose.model('Category',categorySchema)
export default Category;
