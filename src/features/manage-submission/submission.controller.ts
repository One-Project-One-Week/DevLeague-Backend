import { NextFunction, Request, Response } from "express";
import { createSubmission } from "./submission.service";
import { StatusCodes } from "src/utils/StatusCodes";

export const createSubmissionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const submission = await createSubmission(req.body, req.body.user.id);
    res.status(StatusCodes.CREATED).json({
      message: "Submission created successfully",
      data: submission,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to create submission",
      error: (error as Error).message,
    });
  }
};
