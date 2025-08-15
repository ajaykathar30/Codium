import { Router } from "express";
import { getCategoryQuestions } from "../controllers/content.controller.js";
import {searchQuestionByTitle} from "../controllers/content.controller.js";
const router= Router();
router.route("/questionsByCategory").get(getCategoryQuestions);
router.route("/search").get(searchQuestionByTitle);

export default router;