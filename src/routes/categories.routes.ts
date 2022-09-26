import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const category = categoriesRepository.create({ name, description});

  return response.status(201).json({
    result: 'success',
    message: 'successfully created category',
    data: category,
  });
});

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.status(200).json({
    result: 'success',
    message: 'successfully in list all categories',
    data: allCategories,
  });
});

export { categoriesRoutes };
