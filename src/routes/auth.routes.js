import { Router } from "express";
import {
  login,
  register,
  logOut,
  profile,
} from "../controllers/auth.controles.js";
import { authRequired } from "../middlewares/validateToken.js";
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logOut);

router.get("/profile", authRequired, profile);

export default router;
