import { Response, Request } from "express";
import { container } from "tsyringe";
import { UploadCarImagesUseCase } from "./UploadImagesUseCase";

interface IFiles {
  filename: string;
}

export class UploadCarImagesController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;
    const images = request.files as IFiles[];

    const uploadCarImageUseCase = container.resolve(UploadCarImagesUseCase)

    const images_name = images.map((file) => file.filename);

    const imagesUploaded = await uploadCarImageUseCase.execute({
      car_id: id,
      images_name
    });

    return response.status(201).json(imagesUploaded);
  }
}