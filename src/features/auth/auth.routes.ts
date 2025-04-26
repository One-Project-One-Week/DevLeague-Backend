import { Router } from 'express';
import {
  registerUserController,
  loginUserController,
  logoutUserController,
  refreshController,
  authUserController,
} from './auth.controller';
import { imageUpload } from 'src/utils/uploaderUtils';
import userAuthMiddleware from 'src/middlewares/authMiddleware';

const router = Router();

router.get('/me', userAuthMiddleware, authUserController);
router.post(
  '/register',
  imageUpload.fields([{ name: 'profile_image', maxCount: 1 }]),
  registerUserController
);
router.post('/login', loginUserController);
router.post('/refresh', refreshController);
router.post('/logout', logoutUserController);

export default router;
