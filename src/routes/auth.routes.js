import { Router } from "express";
import {
  login,
  register,
  logOut,
  profile,
} from "../controllers/auth.controles.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logOut);

router.get("/profile", authRequired, profile);

export default router;
