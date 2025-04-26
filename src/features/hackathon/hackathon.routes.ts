import { Router } from 'express';
import {
  createHackathonController,
  getHackathonsController,
  getHackathonByIdController,
  updateHackathonController,
  deleteHackathonController,
  getHackathonWinnersController,
} from './hackathon.controller';
import userAuthMiddleware from 'src/middlewares/authMiddleware';

const hackathonRouter = Router();

hackathonRouter.get('/', /* userAuthMiddleware, */ getHackathonsController);
hackathonRouter.get('/:id', userAuthMiddleware, getHackathonByIdController);
hackathonRouter.get(
  '/:id/winners',
  userAuthMiddleware,
  getHackathonWinnersController
);

export default hackathonRouter;
