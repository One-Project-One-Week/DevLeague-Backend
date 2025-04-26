import { StatusCodes } from "src/utils/StatusCodes";
import { showUserHistory } from "./user-history.service";
import { Request, Response } from "express";

export const showUserHistoryController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.userId;
    const userHistory = await showUserHistory(userId);
    res.status(StatusCodes.OK).json({
      message: "User history fetched successfully",
      data: userHistory,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to fetch user history",
      error: (error as Error).message,
    });
  }
};
