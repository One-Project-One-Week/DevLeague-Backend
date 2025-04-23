import ApiError from "./ApiError";

export default class ValidationError extends ApiError {
  errors: ValidationSubErrorType[];
  constructor(
    path: string,
    timestamp: Date,
    errors: ValidationSubErrorType[],
    statusCode?: number
  ) {
    super("Invalid request body", "InvalidRequest", path, statusCode);
    this.errors = errors;
  }
}

export type ValidationSubErrorType = {
  field: string;
  message: string;
  errorCode: string;
};
