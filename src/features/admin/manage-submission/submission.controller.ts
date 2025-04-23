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
    next(e);
  }
};

export default { showSubmissionController };
