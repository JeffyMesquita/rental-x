import { IDateProvider } from './DateProvider/IDateProvider';
import { container } from "tsyringe";
import { DayJsDateProvider } from './DateProvider/implementations/DayJsDateProvider';

container.registerSingleton<IDateProvider>(
  'DayJsDateProvider',
  DayJsDateProvider
);