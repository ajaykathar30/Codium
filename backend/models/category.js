import mongoose, { Mongoose } from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
  title:{
    type:String,
    required:true
  },
 questions:[
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Question',
  }
 ],
},{timestamps:true});

const Category=mongoose.model('Category',categorySchema)
export default Category;
