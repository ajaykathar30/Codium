import axios from 'axios'
import React, { useEffect } from 'react'
import { USER_API_END_POINT } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { setBookmarks } from '../../redux/questionSlice'
const useGetBookmarkQuestion = () => {
    const dispatch=useDispatch()
 useEffect(() => {

    const fetch=async()=>{
        try {
            const res=await axios.get(`${USER_API_END_POINT}/bookmarks`,{withCredentials:true})
            if(res.status!==200) throw new Error("Failed to fetch bookmarks")
            console.log(res.data.bookmarks)
            dispatch(setBookmarks(res.data.bookmarks))
        
        } catch (error) {
            console.log(error)
        }
    }
    fetch();
    }, [])
 
}

export default useGetBookmarkQuestion
