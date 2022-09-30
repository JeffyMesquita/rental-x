import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): Specification | Error {
    const specificationAlreadyExists = this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error(`Specification ${name} already exists`);
    }

    const specification = this.specificationRepository.create({ name, description });

    return specification;
  }
}

export { CreateSpecificationUseCase };
