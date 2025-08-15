import Category from "../models/category.js"
import Question from "../models/question.js"

export const getCategoryQuestions= async (req, res) => {
    try {
        const questions= await Category.find().populate({
            path: 'questions',
        })
        if(!questions){
            return res.status(404).json({message:"No questions found",success:false})
        }
        return res.status(200).json({message:"Questions fetched successfully",success:true,questions})
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Internal server error", success: false })
    }
}
export const searchQuestionByTitle=async(req,res)=>{
    try{
        const {title}=req.query
        
        const questions=await Question.find({title:{$regex:title,$options:"i"}})
        // if(!questions || questions.length===0){
        //     return res.status(404).json({message:"No questions found",success:false})
        // }
        return res.status(200).json({message:"Questions fetched successfully",success:true,questions})

    }catch(error){  
        console.error(error)
        return res.status(500).json({ message: "Internal server error", success: false })
    }
}