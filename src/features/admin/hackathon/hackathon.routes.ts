import { Router } from 'express';

import {
  getHackathonByIdController,
  getHackathonsController,
  createHackathonController,
  updateHackathonController,
  deleteHackathonController,
} from 'src/features/hackathon/hackathon.controller';
import adminAuthMiddleware from 'src/middlewares/adminAuthMiddleware';

const hackathonRouter = Router();

hackathonRouter.get('/', adminAuthMiddleware, getHackathonsController);
hackathonRouter.get('/:id', adminAuthMiddleware, getHackathonByIdController);
hackathonRouter.post('/', adminAuthMiddleware, createHackathonController);
hackathonRouter.put('/:id', adminAuthMiddleware, updateHackathonController);
hackathonRouter.delete('/:id', adminAuthMiddleware, deleteHackathonController);

export default hackathonRouter;
