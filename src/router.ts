import { Router } from "express";
import adminAuthRouter from "./features/admin/auth/auth.route";
import adminSubmissionRouter from "./features/admin/manage-submission/submission.route";
import hackathonRouter from "./features/hackathon/hackathon.routes";
import authRouter from "./features/auth/auth.routes";
import adminHackathonRouter from "./features/admin/hackathon/hackathon.routes";
import teamRouter from "./features/manage-team/team.routes";
import leaderboardRouter from "./features/leaderboard/leaderboard.routes";

const router = Router();
router.use("/admin", adminAuthRouter);
router.use("/auth", authRouter);
router.use("/hackathons", hackathonRouter);
router.use("/admin", adminSubmissionRouter);
router.use("/admin/hackathons", adminHackathonRouter);
router.use("/teams", teamRouter);
router.use("/leaderboard", leaderboardRouter);

export default router;
