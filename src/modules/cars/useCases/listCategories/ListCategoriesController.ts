import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}


  handle(request: Request, response: Response): Response {
    const allCategories = this.listCategoriesUseCase.execute();

    return response.status(200).json({
      statusCode: 200,
      result: 'success',
      message: 'successfully in list all categories',
      data: allCategories,
    });
  }
}

export { ListCategoriesController };
