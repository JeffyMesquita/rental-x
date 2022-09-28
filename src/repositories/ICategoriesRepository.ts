import { Category } from "../model/Category";


interface ICategoriesRepository {
  findByName(name:string): Category}