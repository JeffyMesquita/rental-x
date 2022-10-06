import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<void> {
    const { id } = request.user;

    // Receber arquivo
    const avatar_file = null;

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    const user = await updateUserAvatarUseCase.execute({
      user_id: id,
      avatar_file,
    });

    response.status(204).send();
  }
}

export { UpdateUserAvatarController };
