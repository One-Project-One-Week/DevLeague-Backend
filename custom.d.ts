export {};

declare global {
  namespace Express {
    export interface Request {
      adminId: string;
      userId: string;
    }
  }
}
