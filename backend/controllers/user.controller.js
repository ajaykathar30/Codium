import User from "../models/user.js";
export const addBookmark=async(req,res)=>{
    try {
        const {questionId} = req.body;
        if(!questionId){
            return res.status(400).json({ message: "Question ID is required", success: false });
        }
        const userId = req.id; 
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        if (user.bookmarks.includes(questionId)) {
            return res.status(400).json({ message: "Question already bookmarked", success: false });
        }
        user.bookmarks.push(questionId)
        await user.save()
        return res.status(200).json({ message: "Question bookmarked ", success: true ,bookmarks: user.bookmarks });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }

}
export const getBookmarks=async(req,res)=>{
    try {
        const userId=req.id
        const user=await User.findById(userId).populate('bookmarks')
        if(!user){
            return res.status(404).json({ message: "User not found", success: false });
        }   
        if(user.bookmarks.length===0){
            return res.status(404).json({ message: "No bookmarks found", success: false });
        }
        return res.status(200).json({ message: "Bookmarks fetched ", success: true, bookmarks: user.bookmarks });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}
export const removeBookmark=async(req,res)=>{
    try {
        const {questionId}=req.body
        if(!questionId){
            return res.status(400).json({ message: "Question ID is required", success: false });
        }
        const userId = req.id;  
        const user=await User.findById(userId)
        if(!user){
            return res.status(404).json({ message: "User not found", success: false });
        }
        if(!user.bookmarks.includes(questionId)){
            return res.status(400).json({ message: "Question not bookmarked", success: false });
        }
        user.bookmarks=user.bookmarks.filter((id)=>id.toString()!==questionId.toString())
        await user.save()
        return res.status(200).json({ message: "Bookmark removed !!", success: true, bookmarks: user.bookmarks });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}
export const addToComplete=async(req,res)=>{
    try {
        const { questionId } = req.body;
        if (!questionId) {
            return res.status(400).json({ message: "Question ID is required", success: false });
        }
        const userId = req.id; 
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        if (user.completedQuestions.includes(questionId)) {
            return res.status(400).json({ message: "Question already completed", success: false });
        }
        user.completedQuestions.push(questionId);
        await user.save();
        return res.status(200).json({ message: "Question marked as completed ", success: true, completedQuestions: user.completedQuestions });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}

export const getCompletedQuestions = async (req, res) => {
    try {
        const userId = req.id;
        const user = await User.findById(userId).populate('completedQuestions');
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        if (user.completedQuestions.length === 0) {
            return res.status(404).json({ message: "No completed questions found", success: false });
        }
        return res.status(200).json({ message: "Completed questions fetched ", success: true, completedQuestions: user.completedQuestions });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}
export const removeFromComplete = async (req, res) => {    
    try {
        const { questionId } = req.body;
        if (!questionId) {
            return res.status(400).json({ message: "Question ID is required", success: false });
        }
        const userId = req.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        if (!user.completedQuestions.includes(questionId)) {
            return res.status(400).json({ message: "Question not completed", success: false });
        }
        user.completedQuestions = user.completedQuestions.filter((id) => id.toString() !== questionId.toString());
        await user.save();
        return res.status(200).json({ message: "Question unchecked", success: true, completedQuestions: user.completedQuestions });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}
    