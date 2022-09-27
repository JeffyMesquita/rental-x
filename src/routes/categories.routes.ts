import { Router } from 'express';
import { Category } from '../model/Category';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  const category = createCategoryService.execute({name, description});

  
  // if(category !== {} as Category) {
  //   console.log("already exists", category);
  //   return;
  // }

  // const categoryAlreadyExists = categoriesRepository.findByName(name);

  // if (categoryAlreadyExists) {
  //   return response.status(400).json({
  //     statusCode: 400,
  //     result: 'error',
  //     message: 'Category already exists',
  //   });
  // }

  // const category = categoriesRepository.create({ name, description });

  return response.status(201).json({
    statusCode: 201,
    result: 'success',
    message: 'successfully created category',
    data: category,
  });
});

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.status(200).json({
    statusCode: 200,
    result: 'success',
    message: 'successfully in list all categories',
    data: allCategories,
  });
});

export { categoriesRoutes };
