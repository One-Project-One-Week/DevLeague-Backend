import { Request, Response } from "express";
import {
  createTeam,
  getTeamById,
  updateTeam,
  joinTeam,
  getTeams,
} from "./team.service";
import { StatusCodes } from "../../utils/StatusCodes";

export const joinTeamController = async (req: Request, res: Response) => {
  try {
    const team = await joinTeam(req.params.id, req.body.userId);

    res.status(StatusCodes.OK).json({
      message: "Team joined successfully",
      data: team,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to join team",
      error: (error as Error).message,
    });
  }
};

export const createTeamController = async (req: Request, res: Response) => {
  try {
    const team = await createTeam(req.body);
    res.status(StatusCodes.CREATED).json({
      message: "Team created successfully",
      data: team,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to create team",
      error: (error as Error).message,
    });
  }
};

export const getTeamsController = async (req: Request, res: Response) => {
  try {
    const teams = await getTeams();
    res.status(StatusCodes.OK).json({
      message: "Teams fetched successfully",
      data: teams,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to fetch teams",
      error: (error as Error).message,
    });
  }
};

export const getTeamByIdController = async (req: Request, res: Response) => {
  try {
    const team = await getTeamById(req.params.id);
    res.status(StatusCodes.OK).json({
      message: "Team fetched successfully",
      data: team,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to fetch team",
      error: (error as Error).message,
    });
  }
};

export const updateTeamController = async (req: Request, res: Response) => {
  try {
    const team = await updateTeam(req.params.id, req.files);
    res.status(StatusCodes.OK).json({
      message: "Team updated successfully",
      data: team,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to update team",
      error: (error as Error).message,
    });
  }
};
