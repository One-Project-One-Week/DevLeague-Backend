import { Router } from "express";
import { addRegisterController } from "./hackathon-register.controller";
import userAuthMiddleware from "src/middlewares/authMiddleware";

const hackathonRegisterRouter = Router();

hackathonRegisterRouter.post(
  "/:hackathon_id/register",
  userAuthMiddleware,
  addRegisterController
);

export default hackathonRegisterRouter;
