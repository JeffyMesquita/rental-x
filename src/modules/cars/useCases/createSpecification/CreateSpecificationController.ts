import { Request, Response} from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  handle(request: Request, response: Response) : Response {
    const { name, description } = request.body;
    const createSpecificationUseCase = new CreateSpecificationUseCase();

    return response
  }
}

export { CreateSpecificationController };