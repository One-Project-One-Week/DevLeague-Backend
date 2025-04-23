import { NextFunction, Request, Response, Router } from 'express';
import adminAuthRouter from './features/admin/auth/auth.route';
import adminSubmissionRouter from './features/admin/manage-submission/submission.route';
import adminAuthMiddleware from './middlewares/adminAuthMiddleware';

const router = Router();

router.use('/admin', adminAuthRouter);
router.use('/admin', adminSubmissionRouter);
export default router;
