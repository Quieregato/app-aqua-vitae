import { IGlobaSlides } from './globa.slides';
import { IUser } from './user';

export interface IAnthropometricsSlice extends IGlobaSlides {
  anthropometrics: IAnthropometricsTypes;
}

interface IAnthropometricsTypes {
  unique: IAnthropometricsEntity | undefined;
  me: IAnthropometricsEntity | undefined;
  all: IAnthropometricsEntity[] | undefined;
}

interface IAnthropometricsEntity {
  created_at: string | undefined;
  updated_at: string | undefined;
  deleted_at: string | undefined;
  weight: number;
  height: number;
  waist_circumference: number;
  fat_mass: number;
  muscle_mass: number;
  bone_mass: number;
  body_water: number;
  basal_metabolism: number;
  visceral_fat: number;
  date: string | undefined;
  user: IUser;
  body_photo: string | undefined;
}
