import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  id: string;
  user_id: string;
}

@injectable()
export class DevolutionRentalUseCase {

  constructor(
    @inject('RentalsRepository')
    private rentalsRepository: IRentalsRepository,
    @inject('Cars')
    private carsRepository: ICarsRepository,
    @inject('DayJsDateProvider')
    private dateProvider: IDateProvider
  ){}

  async execute({ id, user_id }: IRequest): Promise<void> {
    const rental = await this.rentalsRepository.findById(id);

    if(!rental) {
      throw new AppError('Rental does not exist')
    }

    // Verificar o tempo de aluguel 
    const  dateNow = this.dateProvider.dateNow();
    const diffInHours = this.dateProvider.compareInHours(dateNow, rental.expected_return_date);

    if(diffInHours < 24){
      
    }
  }
}
