import { Request, Response, Router } from 'express';
import submissionController from './submission.controller';
import adminAuthMiddleware from 'src/middlewares/adminAuthMiddleware';
const router = Router();
router.get(
  '/hackathons/:hackathon_id/submissions',
  adminAuthMiddleware,
  submissionController.showSubmissionController
);
router.patch(
  '/submission/:submission_id',
  adminAuthMiddleware,
  submissionController.updateSubmissionController
);

export default router;
