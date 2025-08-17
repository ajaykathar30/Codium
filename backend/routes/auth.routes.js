import { Router } from "express";
import { register, } from "../controllers/auth.controller.js";
import { login } from "../controllers/auth.controller.js";
import { logout } from "../controllers/auth.controller.js";
import isAuth from "../middleware/isAuth.js";
const router = Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(isAuth,logout);

export default router;