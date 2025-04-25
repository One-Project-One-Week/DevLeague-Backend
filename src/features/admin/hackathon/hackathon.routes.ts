import { Router } from "express";

import {
  getHackathonByIdController,
  getHackathonsController,
  createHackathonController,
  updateHackathonController,
  deleteHackathonController,
  getHackathonWinnersController,
} from "src/features/hackathon/hackathon.controller";
import adminAuthMiddleware from "src/middlewares/adminAuthMiddleware";
import { imageUpload } from "src/utils/uploaderUtils";

const hackathonRouter = Router();

hackathonRouter.get("/", adminAuthMiddleware, getHackathonsController);
hackathonRouter.get("/:id", adminAuthMiddleware, getHackathonByIdController);
hackathonRouter.post(
  "/",
  adminAuthMiddleware,
  imageUpload.fields([
    { name: "profile_image", maxCount: 1 },
    { name: "cover_image", maxCount: 1 },
  ]),
  createHackathonController
);
hackathonRouter.put(
  "/:id",
  adminAuthMiddleware,
  imageUpload.fields([
    { name: "profile_image", maxCount: 1 },
    { name: "cover_image", maxCount: 1 },
  ]),
  updateHackathonController
);
hackathonRouter.delete("/:id", adminAuthMiddleware, deleteHackathonController);
hackathonRouter.get(
  "/:id/winners",
  adminAuthMiddleware,
  getHackathonWinnersController
);

export default hackathonRouter;
