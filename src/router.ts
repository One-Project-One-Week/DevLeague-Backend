import { Router } from 'express';
import adminAuthRouter from './features/admin/auth/auth.route';
import adminSubmissionRouter from './features/admin/manage-submission/submission.route';
import adminAuthMiddleware from './middlewares/adminAuthMiddleware';
import adminSubmissionRouter from './features/admin/manage-submission/submission.route';
import hackathonRouter from './features/hackathon/hackathon.routes';

const router = Router();

router.use('/admin', adminAuthRouter);
router.use('/hackathons', hackathonRouter);
router.use('/admin', adminSubmissionRouter);
export default router;
