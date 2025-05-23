import { Router } from "express";
import {
  createTeamController,
  getTeamsController,
  getTeamByIdController,
  updateTeamController,
  joinTeamController,
} from "./team.controller";
import { imageUpload } from "src/utils/uploaderUtils";
import userAuthMiddleware from "src/middlewares/authMiddleware";

const router = Router();

router.post("/join/:id", userAuthMiddleware, joinTeamController);
router.post(
  "/",
  userAuthMiddleware,
  imageUpload.fields([{ name: "profile_image", maxCount: 1 }]),
  createTeamController
);
router.get("/", getTeamsController);
router.get("/:id", getTeamByIdController);
router.put(
  "/:id",
  userAuthMiddleware,
  imageUpload.fields([{ name: "profile_image", maxCount: 1 }]),
  createTeamController
);
router.get("/", getTeamsController);
router.get("/:id", getTeamByIdController);
router.put(
  "/:id",
  userAuthMiddleware,
  imageUpload.fields([{ name: "profile_image", maxCount: 1 }]),
  updateTeamController
);

export default router;
