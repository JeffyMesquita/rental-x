import { ensuredAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';

import { CreateRentalController } from '@modules/rentals/useCases/CreateRental/CreateRentalController';
import { DevolutionRentalController } from '@modules/rentals/useCases/DevolutionRental/DevolutionRentalController';

const rentalsRoutes = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();

rentalsRoutes.post('/', ensuredAuthenticated, createRentalController.handle);
rentalsRoutes.post(
  '/devolution/:id',
  ensuredAuthenticated,
  devolutionRentalController.handle
);

export { rentalsRoutes };
