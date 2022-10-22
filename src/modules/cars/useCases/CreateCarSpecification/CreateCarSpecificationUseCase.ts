import { inject, injectable } from 'tsyringe';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { AppError } from '@shared/errors/AppError';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationRepository';

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

@injectable()
export class CreateCarSpecificationUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
    const carsExists = await this.carsRepository.findById(car_id);

    if (!carsExists) {
      throw new AppError('Car does not exist');
    }

    const specifications = await this.specificationsRepository.findByIds(
      specifications_id
    );

    carsExists.specifications = specifications;

    await this.carsRepository.create(carsExists);

    return carsExists;
  }
}
