import { Router } from "express";
import { register, } from "../controllers/auth.controller.js";
import { login } from "../controllers/auth.controller.js";
import { logout } from "../controllers/auth.controller.js";
import isAuth from "../middleware/isAuth.js";
import limiter from "../middleware/rateLimit.js";
const router = Router();
router.route("/register").post(limiter, register);
router.route("/login").post(limiter, login);
router.route("/logout").get( isAuth, logout);

export default router;