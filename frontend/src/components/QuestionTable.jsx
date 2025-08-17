import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { USER_API_END_POINT } from "../utils/constant";
import { setUser } from "../../redux/authSlice";

const QuestionTable = ({ questions }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleStatusChange = async (e, id) => {
    if (!user) {
      return toast("Login to save status changes");
    }
    if (e.target.checked) {
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/complete/add`,
          { questionId: id },
          { withCredentials: true }
        );
        if (res.status === 200) {
          toast.success(res.data.message);

          const updatedUser = {
            ...user,
            completedQuestions: [...(user?.completedQuestions || []), id],
          };
          dispatch(setUser(updatedUser));
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
        console.error("Error adding completed question:", error);
      }
    } else {
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/complete/remove`,
          { questionId: id },
          { withCredentials: true }
        );
        if (res.status === 200) {
          toast.success(res.data.message);


          const updatedUser = {
            ...user,
            completedQuestions: user?.completedQuestions.filter(
              (q) => q !== id
            ),
          };
          dispatch(setUser(updatedUser));
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
        console.error("Error removing completed question:", error);
      }
    }
  };

  const handleBookmarkChange = async (e, id) => {
    if (!user) {
      return toast("Login to save bookmark changes");
    }
    if (e.target.checked) {
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/bookmarks/add`,
          { questionId: id },
          { withCredentials: true }
        );
        if (res.status === 200) {
          toast.success(res.data.message);


          const updatedUser = {
            ...user,
            bookmarks: [...(user?.bookmarks || []), id],
          };
          dispatch(setUser(updatedUser));
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
        console.error("Error adding bookmark:", error);
      }
    } else {
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/bookmarks/remove`,
          { questionId: id },
          { withCredentials: true }
        );
        if (res.status === 200) {
          toast.success(res.data.message);


          const updatedUser = {
            ...user,
            bookmarks: user?.bookmarks.filter((q) => q !== id),
          };
          dispatch(setUser(updatedUser));
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
        console.error("Error removing bookmark:", error);
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Status</th>
            <th>Bookmark</th>
            <th>Title</th>
            <th>Yt-Link</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {questions?.map((question) => (
            <tr key={question._id}>
              <td>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={user?.completedQuestions?.includes(question._id)}
                    onChange={(e) => handleStatusChange(e, question._id)}
                  />
                </label>
              </td>
              <td>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={user?.bookmarks?.includes(question._id)}
                    onChange={(e) => handleBookmarkChange(e, question._id)}
                  />
                </label>
              </td>
              <td>
                <a href={question.url}>{question.title}</a>
              </td>
              <td>
                <a href={question.yt}>
                  <img
                    src="/ytLogo.png"
                    className="w-8 rounded"
                    alt="YouTube Link"
                  />
                </a>
              </td>
              <th>
                <button className="btn btn-dash btn-warning">
                  {question.difficulty}
                </button>
              </th>
            </tr>
          ))}
        </tbody>

        {/* foot */}
        <tfoot>
          <tr>
            <th>Status</th>
            <th>Bookmark</th>
            <th>Title</th>
            <th>Yt-Link</th>
            <th>Difficulty</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default QuestionTable;
