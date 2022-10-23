import multer from 'multer';
import { Router } from 'express';

import { CreateCarSpecificationController } from './../../../../modules/cars/useCases/CreateCarSpecification/CreateCarSpecificationController';
import { CreateCarController } from '@modules/cars/useCases/CreateCar/CreateCarController';
import { UploadCarImagesController } from '@modules/cars/useCases/UploadImages/UploadImagesController';
import { ListAvailableCarsController } from '@modules/cars/useCases/ListAvailableCars/ListAvailableCarsController';

import uploadConfig from '@config/upload';
import { ensuredAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig.upload('./tmp/cars'))

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

carsRoutes.post(
  '/images/:id',
  ensuredAuthenticated,
  ensureAdmin,
  upload.array('images'),
  uploadCarImagesController.handle
);

export { carsRoutes };
