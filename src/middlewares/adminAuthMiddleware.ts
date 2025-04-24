import { NextFunction, Request, Response } from 'express';
import prisma from 'src/db/prisma';
import jwtHelper from 'src/utils/jwtHelper';

const adminAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    next(new Error('No Access Token Found'));
  }

  // Verify token
  const decoded = jwtHelper.verifyToken(accessToken.token, 'access') as {
    id: string;
  };
  // Find admin from DB
  const admin = await prisma.admin.findUnique({
    where: { id: decoded.id },
  });
  if (!admin) {
    next(new Error('Admin not found.'));
  }
  req.adminId = decoded.id;
  next();
};

export default adminAuthMiddleware;
