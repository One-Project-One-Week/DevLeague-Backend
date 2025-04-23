import { Request, Response } from "express";
import {
  createHackathon,
  getHackathons,
  getHackathonById,
  updateHackathon,
  deleteHackathon,
} from "./hackathon.service";
import { StatusCodes } from "../../utils/StatusCodes";

export const createHackathonController = async (
  req: Request,
  res: Response
) => {
  try {
    const hackathon = await createHackathon(req.body);
    res.status(StatusCodes.CREATED).json({
      message: "Hackathon created successfully",
      data: hackathon,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to create hackathon",
      error: (error as Error).message,
    });
  }
};

export const getHackathonsController = async (req: Request, res: Response) => {
  try {
    const hackathons = await getHackathons();
    res.status(StatusCodes.OK).json({
      message: "Hackathons fetched successfully",
      data: hackathons,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to fetch hackathons",
      error: (error as Error).message,
    });
  }
};

export const getHackathonByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const hackathon = await getHackathonById(req.params.id);
    res.status(StatusCodes.OK).json({
      message: "Hackathon fetched successfully",
      data: hackathon,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to fetch hackathon",
      error: (error as Error).message,
    });
  }
};

export const updateHackathonController = async (
  req: Request,
  res: Response
) => {
  try {
    const hackathon = await updateHackathon(req.params.id, req.body);
    res.status(StatusCodes.OK).json({
      message: "Hackathon updated successfully",
      data: hackathon,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to update hackathon",
      error: (error as Error).message,
    });
  }
};

export const deleteHackathonController = async (
  req: Request,
  res: Response
) => {
  try {
    const hackathon = await deleteHackathon(req.params.id);
    res.status(StatusCodes.OK).json({
      message: "Hackathon deleted successfully",
      data: hackathon,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to delete hackathon",
      error: (error as Error).message,
    });
  }
};
