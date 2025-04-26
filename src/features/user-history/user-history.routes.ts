import { Router } from "express";
import { showUserHistoryController } from "./user-history.controller";
import userAuthMiddleware from "src/middlewares/authMiddleware";

const userHistoryRouter = Router();

userHistoryRouter.get("/", userAuthMiddleware, showUserHistoryController);

export default userHistoryRouter;
