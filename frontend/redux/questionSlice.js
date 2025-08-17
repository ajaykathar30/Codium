import { createSlice } from "@reduxjs/toolkit";
const questionSlice = createSlice({
    name: "question",
    initialState: {
        questions: [],
        bookmarks:[]
    },
    reducers: {
        
        setQuestions: (state, action) => {
            state.questions = action.payload;
        },
        setBookmarks:(state,action)=>{
            state.bookmarks=action.payload
        }

    }
})

export const { setQuestions,setBookmarks } = questionSlice.actions;
export default questionSlice.reducer;
