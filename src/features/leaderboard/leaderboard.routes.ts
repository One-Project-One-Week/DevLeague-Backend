import { Router } from "express";
import { getLeaderboardController } from "./leaderboard.controller";

const router = Router();

router.get("/", getLeaderboardController);

export default router;
