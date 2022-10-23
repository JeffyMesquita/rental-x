import { RentalsRepositoryInMemory } from './../../repositories/inMemory/RentalsRepositoryInMemory';
import { CreateRentalUseCase } from './CreateRentalUseCase';

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe('Create Rental', () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);
  });

  it('should be able to create a new rental ', async () => {
    await createRentalUseCase.execute({
      user_id: '12345',
      car_id: '12345',
      expected_return_date: new Date(),
    });
  });
});
