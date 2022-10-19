export interface AppErrorResponse {
  message: string;
  statusCode: number;
  result: string;
}

export class AppError {
  public readonly message: string;
  public readonly statusCode?: number;
  public readonly result?: string;

  constructor(message: string, statusCode = 400, result = 'error') {
    this.statusCode = statusCode;
    this.message = message;
    this.result = result;
  }
}