import { Router } from "express";
import adminAuthRouter from "./features/admin/auth/auth.route";
import adminSubmissionRouter from "./features/admin/manage-submission/submission.route";
import hackathonRouter from "./features/hackathon/hackathon.routes";
import authRouter from "./features/auth/auth.routes";
import teamRouter from "./features/manage-team/team.routes";
const router = Router();
router.use("/admin/auth", adminAuthRouter);
router.use("/auth", authRouter);
router.use("/hackathons", hackathonRouter);
router.use("/admin", adminSubmissionRouter);
router.use("/teams", teamRouter);

export default router;
