import { NextFunction, Request, Response } from 'express';
import submissionService from './submission.service';

const showSubmissionController = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { hackathon_id } = req.params;
    const submissions = await submissionService.getAllSubmissionByHackathonId(
      hackathon_id
    );
    res
      .status(200)
      .json({ message: 'Submissions Successfully Fetch.', data: submissions });
  } catch (e) {
    console.log(e);
    next(e);
  }
};
const updateSubmissionController = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { submission_id } = req.params;
    const { placement, feedback } = req.body;
    const result = await submissionService.updateSubmissionById(
      submission_id,
      placement,
      feedback
    );
    if (!result) {
      throw new Error('Unable to handle.');
    }
    res
      .status(201)
      .json({ message: 'Add Placement Successfully', data: result });
  } catch (e) {
    next(e);
  }
};

export default { showSubmissionController, updateSubmissionController };
