import { AppError } from '@errors/AppError';
import { CategoriesRepositoryInMemory } from '@modules/cars/repositories/inMemory/CategoriesRepositoryInMemory';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create Category', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it('should be able to create a new category', async () => {
    const newCategory = await createCategoryUseCase.execute({
      name: 'Category Test',
      description: 'Category Test Description',
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      newCategory.name
    );

    expect(categoryCreated).toHaveProperty('id');
  });

  it('should not be able to create a new category with name exists', async () => {
    expect(async () => {
      await createCategoryUseCase.execute({
        name: 'Category Test',
        description: 'Category Test Description',
      });

      await createCategoryUseCase.execute({
        name: 'Category Test',
        description: 'Category Test Description',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
