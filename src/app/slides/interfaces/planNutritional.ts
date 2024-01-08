import { IGlobaSlides } from './globa.slides';

export interface IPlanNutritionalSlice extends IGlobaSlides {
  systemRecomendation: IPlan[] | undefined;
}

export interface IPlan {
  id: string;
  score: number;
  description: string;
}
