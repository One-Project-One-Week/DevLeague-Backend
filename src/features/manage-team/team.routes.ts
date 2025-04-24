import { Router } from "express";
import {
  createTeamController,
  getTeamsController,
  getTeamByIdController,
  updateTeamController,
  joinTeamController,
} from "./team.controller";

const router = Router();

router.post("/join/:id", joinTeamController);
router.post("/", createTeamController);
router.get("/", getTeamsController);
router.get("/:id", getTeamByIdController);
router.put("/:id", updateTeamController);

export default router;
