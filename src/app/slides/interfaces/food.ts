import { IGlobaSlides } from './globa.slides';

export interface IFoodSlice extends IGlobaSlides {
  foods: IFood[] | undefined;
  foodsResolved: any[];
}

export interface IFood {
  id: string;
}
