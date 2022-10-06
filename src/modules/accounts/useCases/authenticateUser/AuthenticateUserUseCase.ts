import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  }
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Usuário existe?
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Email or password incorrect');
    }
    // Senha está correta?

    const passwordMatch = compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email or password incorrect');
    }

    // Gerar jsonwebtoken
    const token = sign({}, 'bc346418735e2bc43fcb7bee4bd8a96e', {
      subject: user.id,
      expiresIn: '1d',
    });

    return { user, token };
  }
}

export { AuthenticateUserUseCase };
