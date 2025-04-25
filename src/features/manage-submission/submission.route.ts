import { Router } from "express";
import { createSubmissionController } from "./submission.controller";
import authMiddleware from "src/middlewares/authMiddleware";
const router = Router();

router.post(
  "/:hackathon_id/submissions",
  authMiddleware,
  createSubmissionController
);

export default router;
