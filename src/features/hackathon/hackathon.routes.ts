import { Router } from "express";
import {
  createHackathonController,
  getHackathonsController,
  getHackathonByIdController,
  updateHackathonController,
  deleteHackathonController,
} from "./hackathon.controller";

const hackathonRouter = Router();

hackathonRouter.post("/", createHackathonController);
hackathonRouter.get("/", getHackathonsController);
hackathonRouter.get("/:id", getHackathonByIdController);
hackathonRouter.put("/:id", updateHackathonController);
hackathonRouter.delete("/:id", deleteHackathonController);

export default hackathonRouter;
