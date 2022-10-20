import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import { AppError, AppErrorResponse } from '@shared/errors/AppError';

import createConnection from '@shared/infra/typeorm';

import '@shared/container';

import { router } from './routes';
import swaggerFile from '../../../swagger.json';

createConnection();
const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (
    err: AppErrorResponse,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
        result: err.result,
        statusCode: err.statusCode,
      });
    }

    return response.status(500).json({
      message: `Internal Server Error - ${err.message}`,
      result: null,
      statusCode: 500,
    });
  }
);

app.listen(3333, () => console.log('Server listening on port 3333'));
