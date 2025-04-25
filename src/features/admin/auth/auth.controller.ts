import { NextFunction, Request, Response } from 'express';
import authService from './auth.service';
import jwtHelper from 'src/utils/jwtHelper';
import { StatusCodes } from 'src/utils/StatusCodes';
type AuthJwtPayload = {
  id: string;
};
const loginController = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, password } = req.body;
    const admin = await authService.loginAdmin(email, password);
    if (!admin) {
      throw new Error('Invalid Email or Password');
    }
    const accessToken = jwtHelper.generateAccessToken({ id: admin.id });
    const refreshToken = jwtHelper.generateRefreshToken({ id: admin.id });
    res.cookie('accessToken', accessToken, {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: true,
      // path: '/admin',
      maxAge: accessToken.exp,
    });
    res.cookie('refreshToken', refreshToken, {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: true,
      // path: '/admin',
      maxAge: refreshToken.exp,
    });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
};

const refreshController = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { refreshToken } = req.cookies;
    console.log(refreshToken, 'refresh');
    if (!refreshToken) {
      res.status(StatusCodes.NOT_FOUND).json({ message: 'refresh not found' });
      return;
    }
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
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

const logoutController = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  res.status(StatusCodes.OK).json({ message: 'Logout Successfully' });
};

const getAdminController = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const adminId = req.adminId;
    const admin = authService.getAdmin(adminId);
    res
      .status(StatusCodes.OK)
      .json({ message: 'Get Admin Successfully', data: admin });
  } catch (e) {
    next(e);
  }
};

export {
  loginController,
  AuthJwtPayload,
  logoutController,
  refreshController,
  getAdminController,
};
