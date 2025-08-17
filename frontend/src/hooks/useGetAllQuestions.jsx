import { useEffect } from "react"
import { CONTENT_API_END_POINT } from "../utils/constant";
import { setQuestions } from "../../redux/questionSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const useGetAllQuestions = () => {
 const dispatch = useDispatch();

 useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${CONTENT_API_END_POINT}/questionsByCategory`);
        dispatch(setQuestions(response.data.questions));
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
 }, [])

}

export default useGetAllQuestions
