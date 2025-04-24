import { NextFunction, Request, Response } from 'express';
import prisma from 'src/db/prisma';
import jwtHelper from 'src/utils/jwtHelper';

const userAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { accessToken } = req.cookies;
    if (!accessToken) {
      return next(new Error('No Access Token Found'));
    }

    const decoded = jwtHelper.verifyToken(accessToken.token, 'access') as {
      id: string;
    };

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      return next(new Error('User not found.'));
    }

    req.userId = user.id;

    next();
  } catch (error) {
    next(error);
  }
};

export default userAuthMiddleware;
