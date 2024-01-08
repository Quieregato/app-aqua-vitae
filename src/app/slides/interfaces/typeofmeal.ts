import { IGlobaSlides } from './globa.slides';

export interface ITypeOfMealSlice extends IGlobaSlides {
  typesOfMeals: IType[] | undefined;
}

export interface IType {
  id: string;
  description: string;
}
