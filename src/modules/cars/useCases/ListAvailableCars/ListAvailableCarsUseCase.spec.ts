import { CarsRepositoryInMemory } from '@modules/cars/repositories/inMemory/CarsRepositoryInMemory';
import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Jest Car',
      description: "It's a new Jest Car",
      daily_rate: 100,
      license_plate: 'ABC-1236',
      fine_amount: 60,
      brand: 'Jest Brand Car',
      category_id: '8e3e5fe2-6dfb-4240-a57e-521ba99339f0',
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Other Jest Car',
      description: "It's a new Jest Car",
      daily_rate: 100,
      license_plate: 'ABC-1238',
      fine_amount: 60,
      brand: 'Other Jest Brand Car',
      category_id: '8e3e5fe2-6dfb-4240-a57e-521ba99339f0',
    });

    const cars = await listCarsUseCase.execute({
      brand: 'Other Jest Brand Car',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'One More Jest Car',
      description: "It's a new Jest Car",
      daily_rate: 100,
      license_plate: 'ABC-1239',
      fine_amount: 60,
      brand: 'Other Jest Brand Car',
      category_id: '8e3e5fe2-6dfb-4240-a57e-521ba99339f0',
    });

    const cars = await listCarsUseCase.execute({
      name: 'One More Jest Car',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category_id', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Other More Jest Car',
      description: "It's a new Jest Car",
      daily_rate: 100,
      license_plate: 'ABC-1240',
      fine_amount: 60,
      brand: 'Other Jest Brand Car',
      category_id: '8e3e5fe2-6dfb-4240-a57e-521ba99339f0',
    });

    const cars = await listCarsUseCase.execute({
      category_id: '8e3e5fe2-6dfb-4240-a57e-521ba99339f0',
    });

    expect(cars).toEqual([car]);
  });
});
