import mongoose from 'mongoose';
const { Schema } = mongoose;

const questionSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  url:{
    type:String,
    required:true,
    unique:true
  },
  difficulty:{
    type:String,
    enum:['easy','medium','hard'],
    required:true
  },
},{timestamps:true});
const Question=mongoose.model('Question',questionSchema)
export default Question;
