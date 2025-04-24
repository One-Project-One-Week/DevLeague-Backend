import { Router } from "express";
import {
  registerUserController,
  loginUserController,
  logoutUserController,
  refreshController,
} from "./auth.controller";

const router = Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.post("/refresh", refreshController);
router.post("/logout", logoutUserController);

export default router;
