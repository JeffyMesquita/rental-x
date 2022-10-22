import { CreateCarSpecificationController } from './../../../../modules/cars/useCases/CreateCarSpecification/CreateCarSpecificationController';
import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/CreateCar/CreateCarController';
import { ensuredAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ListAvailableCarsController } from '@modules/cars/useCases/ListAvailableCars/ListAvailableCarsController';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();

carsRoutes.post(
  '/',
  ensuredAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRoutes.get('/available', listAvailableCarsController.handle);

carsRoutes.post(
  '/specifications/:id',
  ensuredAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle
);

export { carsRoutes };
