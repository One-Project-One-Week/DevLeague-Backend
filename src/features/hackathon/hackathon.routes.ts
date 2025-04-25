import { Router } from "express";
import {
  createHackathonController,
  getHackathonsController,
  getHackathonByIdController,
  updateHackathonController,
  deleteHackathonController,
} from "./hackathon.controller";
import userAuthMiddleware from "src/middlewares/authMiddleware";

const hackathonRouter = Router();

hackathonRouter.get("/", userAuthMiddleware, getHackathonsController);
hackathonRouter.get("/:id", userAuthMiddleware, getHackathonByIdController);

export default hackathonRouter;
