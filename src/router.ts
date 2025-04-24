import { NextFunction, Request, Response, Router } from "express";
import passport, { DoneCallback } from "passport";
import { Strategy as JwtStrategy } from "passport-jwt";
import { AuthJwtPayload } from "./features/admin/auth/auth.controller";
import prisma from "./db/prisma";
import adminAuthRouter from "./features/admin/auth/auth.route";
import hackathonRouter from "./features/hackathon/hackathon.routes";
import authRouter from "./features/auth/auth.routes";

const accessTokenExtractor = function (req: Request): string | null {
  const { accessToken } = req.cookies;
  if (!accessToken) return null;
  return accessToken;
};
passport.use(
  "admin-jwt",
  new JwtStrategy(
    {
      jwtFromRequest: accessTokenExtractor,
      secretOrKey: process.env.JWT_ACCESS_SECRET || "secretKey",
    },
    async (payload: AuthJwtPayload, done: DoneCallback) => {
      const admin = await prisma.admin.findUnique({
        omit: {
          password: true,
        },
        where: {
          id: payload.id,
        },
      });
      return admin ? done(null, admin) : done(null, false);
    }
  )
);

const router = Router();

router.use("/admin", (req: Request, res: Response, next: NextFunction) => {
  if (req.path === "/login" || req.path === "/logout") {
    next();
  }
  return passport.authenticate("admin-jwt", { session: false });
});

router.use("/admin/auth", adminAuthRouter);
router.use("/auth", authRouter);
router.use("/hackathons", hackathonRouter);

export default router;
