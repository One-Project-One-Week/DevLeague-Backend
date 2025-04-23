export default class ApiError extends Error {
  status: "error";
  code: number;
  path: string;
  timestamp: Date;
  error: string;
  constructor(
    message: string,
    error: string,
    path: string,
    statusCode?: number
  ) {
    super(message);
    this.error = error;
    this.status = "error";
    this.code = statusCode || 500;
    this.path = path;
    this.timestamp = new Date();
  }
}
