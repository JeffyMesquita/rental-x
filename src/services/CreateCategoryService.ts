import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno do erro
 * [x] - Acessar o repositório
 * [x] - Retornar algo
 */

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): Category | Error {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      return new Error('Category already exists');

      // return response.status(400).json({
      //   statusCode: 400,
      //   result: 'error',
      //   message: 'Category already exists',
      // });
    }

    const category = this.categoriesRepository.create({ name, description });

    return category;
  }
}

export { CreateCategoryService };
