import { Router } from 'express';
import {
  getAdminController,
  loginController,
  logoutController,
  refreshController,
} from './auth.controller';
import adminAuthMiddleware from 'src/middlewares/adminAuthMiddleware';

const router = Router();

router.post('/login', loginController);
router.post('/refresh', refreshController);
router.post('/logout', logoutController);
router.get('/me', adminAuthMiddleware, getAdminController);
export default router;
