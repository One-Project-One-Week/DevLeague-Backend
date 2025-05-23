import { Request, Response } from 'express';
import {
  createHackathon,
  getHackathons,
  getHackathonById,
  updateHackathon,
  deleteHackathon,
  getHackathonWinners,
} from './hackathon.service';
import { StatusCodes } from '../../utils/StatusCodes';
import prisma from 'src/db/prisma';

export const createHackathonController = async (
  req: Request,
  res: Response
) => {
  try {
    const adminId = req.adminId;
    const hackathon = await createHackathon(
      { admin_id: adminId, ...req.body },
      req.files
    );
    res.status(StatusCodes.CREATED).json({
      message: 'Hackathon created successfully',
      data: hackathon,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Failed to create hackathon',
      error: (error as Error).message,
    });
  }
};

export const getHackathonsController = async (req: Request, res: Response) => {
  try {
    const hackathons = await getHackathons();
    res.status(StatusCodes.OK).json({
      message: 'Hackathons fetched successfully',
      data: hackathons,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Failed to fetch hackathons',
      error: (error as Error).message,
    });
  }
};
export const getHackathonRegisterController = async (
  req: Request,
  res: Response
) => {
  const userId = req.userId;
  const { id } = req.params;
  const particpant = await prisma.participant.findFirst({
    where: {
      register: {
        hackathon_id: id,
      },
      participant_id: userId,
    },
  });

  res.status(StatusCodes.OK).json({
    message: 'fetch success',
    data: {
      status: !!particpant,
    },
  });
};
export const getHackathonByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const hackathon = await getHackathonById(req.params.id);
    res.status(StatusCodes.OK).json({
      message: 'Hackathon fetched successfully',
      data: hackathon,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Failed to fetch hackathon',
      error: (error as Error).message,
    });
  }
};

export const updateHackathonController = async (
  req: Request,
  res: Response
) => {
  try {
    const hackathon = await updateHackathon(req.params.id, req.body, req.files);
    res.status(StatusCodes.OK).json({
      message: 'Hackathon updated successfully',
      data: hackathon,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Failed to update hackathon',
      error: (error as Error).message,
    });
  }
};

export const deleteHackathonController = async (
  req: Request,
  res: Response
) => {
  try {
    const hackathon = await deleteHackathon(req.params.id);
    res.status(StatusCodes.OK).json({
      message: 'Hackathon deleted successfully',
      data: hackathon,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Failed to delete hackathon',
      error: (error as Error).message,
    });
  }
};

export const getHackathonWinnersController = async (
  req: Request,
  res: Response
) => {
  try {
    const winners = await getHackathonWinners(req.params.id);
    res.status(StatusCodes.OK).json({
      message: 'Hackathon winners fetched successfully',
      data: winners,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Failed to fetch hackathon winners',
      error: (error as Error).message,
    });
  }
};
