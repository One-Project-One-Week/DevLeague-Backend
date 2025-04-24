import { NextFunction, Request, Response } from 'express';
import hackathonRegisterService from './hackathon-register.service';
import prisma from 'src/db/prisma';
import { StatusCodes } from 'src/utils/StatusCodes';
const addRegisterController = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = req.userId;
    const { hackathon_id } = req.params;
    const { participants } = req.body;
    // validate the number of particpants
    if (
      !hackathonRegisterService.validateRegister(hackathon_id, participants)
    ) {
      throw new Error('Something went wrong!');
    }
    const team = await prisma.user.findUnique({
      select: {
        team_id: true,
      },
      where: {
        id: userId,
      },
    });
    if (!team || !team.team_id) {
      throw new Error('Team is missing!');
    }
    // add data into register table
    const newRegister = await hackathonRegisterService.addNewRegister(
      hackathon_id,
      team.team_id
    );
    // add data into participant table
    const newParticipants = hackathonRegisterService.addPartcipants(
      newRegister.id,
      participants
    );
    res.status(StatusCodes.CREATED).json({
      message: 'Register hackathon successfully!',
      data: {
        ...newRegister,
        participants: newParticipants,
      },
    });
  } catch (e) {
    next(e);
  }
};

export default { addRegisterController };
