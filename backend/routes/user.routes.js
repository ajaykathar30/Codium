import { Router } from "express";
import { getBookmarks,addBookmark,removeBookmark,getCompletedQuestions,addToComplete,removeFromComplete } from "../controllers/user.controller.js";
import isAuth from "../middleware/isAuth.js";
const router = Router();
router.route("/bookmarks").get(isAuth,getBookmarks);
router.route("/bookmarks/add").post(isAuth,addBookmark);
router.route("/bookmarks/remove").post(isAuth,removeBookmark);
router.route("/complete").get(isAuth,getCompletedQuestions);
router.route("/complete/add").post(isAuth,addToComplete);
router.route("/complete/remove").post(isAuth,removeFromComplete);
export default router