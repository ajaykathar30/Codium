import mongoose from 'mongoose';
const { Schema } = mongoose;

const questionSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  url:{
    type:String,
    required:true
  },
  yt:{
    type:String,
  },
  difficulty:{
    type:String,
    enum:['easy','medium','hard']
  }
},{timestamps:true});
const Question=mongoose.model('Question',questionSchema)
export default Question;
