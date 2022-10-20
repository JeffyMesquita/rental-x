import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/CreateCar/CreateCarController';
import { ensuredAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post(
  '/',
  ensuredAuthenticated,
  ensureAdmin,
  createCarController.handle
);

export { carsRoutes };
