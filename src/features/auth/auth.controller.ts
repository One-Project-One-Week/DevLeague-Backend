import { Request, Response, NextFunction } from 'express';
import { registerUser, loginUser } from './auth.service';
import { StatusCodes } from '../../utils/StatusCodes';
import jwtHelper from '../../utils/jwtHelper';
import prisma from 'src/db/prisma';

export const authUserController = async (req: Request, res: Response) => {
  const userId = req.userId;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  res
    .status(StatusCodes.OK)
    .json({ message: 'get user successfully', data: user });
};

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body, req.files);
    res.status(StatusCodes.CREATED).json({
      message: 'User registered successfully',
      data: user,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error registering user',
      error: (error as Error).message,
    });
  }
};

export const loginUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);

    const accessToken = jwtHelper.generateAccessToken({ id: user.id });
    const refreshToken = jwtHelper.generateRefreshToken({ id: user.id });
    res.cookie('accessToken', accessToken, {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: true,
      // path: '/user',
      maxAge: accessToken.exp,
    });
    res.cookie('refreshToken', refreshToken, {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: true,
      // path: '/user',
      maxAge: refreshToken.exp,
    });
    res.status(StatusCodes.OK).json({
      message: 'User logged in successfully',
      data: user,
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Error logging in', error: (error as Error).message });
  }
};

export const logoutUserController = async (req: Request, res: Response) => {
  try {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.status(StatusCodes.OK).json({
      message: 'User logged out successfully',
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Error logging out', error: (error as Error).message });
  }
};

export const refreshController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken)
      res.status(StatusCodes.NOT_FOUND).json({ message: 'refresh not found' });
    const payload = jwtHelper.verifyToken(refreshToken.token, 'refresh') as {
      id: string;
    };
    if (!payload) next(new Error('Invalid Refresh Token'));
    const accessToken = jwtHelper.generateAccessToken({ id: payload.id });
    res.cookie('accessToken', accessToken, {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: true,
      path: '/',
      maxAge: accessToken.exp,
    });
    res.status(StatusCodes.OK).json({
      message: 'Token refreshed successfully',
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error refreshing token',
      error: (error as Error).message,
    });
  }
};
