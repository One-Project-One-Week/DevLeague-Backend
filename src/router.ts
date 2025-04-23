import { Router } from "express";
import hackathonRouter from "./features/hackathon/hackathon.routes";

const router = Router();

router.use("/hackathons", hackathonRouter);

export default router;
