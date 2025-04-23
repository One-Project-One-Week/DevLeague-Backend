import { Request, Response, Router } from 'express';
import submissionController from './submission.controller';
import adminAuthMiddleware from 'src/middlewares/adminAuthMiddleware';
const router = Router();
router.get(
  '/hackathon/:hackathon_id/submissions',
  adminAuthMiddleware,
  submissionController.showSubmissionController
);
//router.get('/submission/:submission_id');
//router.post('/submission');
//router.patch('/submission/:submission_id');

export default router;
