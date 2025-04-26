import { Router } from 'express';
import {
  createHackathonController,
  getHackathonsController,
  getHackathonByIdController,
  updateHackathonController,
  deleteHackathonController,
  getHackathonWinnersController,
  getHackathonRegisterController,
} from './hackathon.controller';
import userAuthMiddleware from 'src/middlewares/authMiddleware';

const hackathonRouter = Router();

hackathonRouter.get('/', /* userAuthMiddleware, */ getHackathonsController);
hackathonRouter.get('/:id', getHackathonByIdController);
hackathonRouter.get(
  '/:id/winners',
  userAuthMiddleware,
  getHackathonWinnersController
);
hackathonRouter.get(
  '/:id/me',
  userAuthMiddleware,
  getHackathonRegisterController
);

export default hackathonRouter;
