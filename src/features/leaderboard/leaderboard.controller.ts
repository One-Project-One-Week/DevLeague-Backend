import { Request, Response } from "express";
import { getLeaderboard } from "./leaderboard.service";
import { StatusCodes } from "../../utils/StatusCodes";

export const getLeaderboardController = async (req: Request, res: Response) => {
  try {
    const leaderboard = await getLeaderboard();
    res.status(StatusCodes.OK).json({
      message: "Leaderboard fetched successfully",
      data: leaderboard,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Error fetching leaderboard",
      error: error,
    });
  }
};
