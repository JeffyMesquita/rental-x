import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';
import { Repository, getRepository } from 'typeorm';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  
  async create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
    });
    
    await this.repository.save(user);
    
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }
}

export { UsersRepository };
