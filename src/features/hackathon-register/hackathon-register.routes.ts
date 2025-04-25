import { Router } from "express";
import userAuthMiddleware from "src/middlewares/authMiddleware";
import hackathonRegisterController from "./hackathon-register.controller";
const router = Router();

router.post(
  "/:hackathon_id/register",
  userAuthMiddleware,
  hackathonRegisterController.addRegisterController
);

export default router;
