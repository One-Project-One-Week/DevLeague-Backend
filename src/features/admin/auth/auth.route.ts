import { Router } from 'express';
import {
  getAdminController,
  loginController,
  logoutController,
  refreshController,
} from './auth.controller';

const router = Router();

router.post('/login', loginController);
router.post('/refresh', refreshController);
router.post('/logout', logoutController);
router.get('/me', getAdminController);
export default router;
