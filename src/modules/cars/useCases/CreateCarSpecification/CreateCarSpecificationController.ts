import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';
import { Request, Response} from 'express';
import { container } from 'tsyringe';


export class CreateCarSpecificationController {
  
  async handle(request: Request, response: Response) {
      const { id } = request.params
      const { specifications_id } = request.body;

      const createCarSpecificationUseCase = container.resolve(CreateCarSpecificationUseCase);

      const cars = await createCarSpecificationUseCase.execute({
        car_id: id,
        specifications_id
      });

      return response.status(200).json(cars);
    };
};