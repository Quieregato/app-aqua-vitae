import { IGlobaSlides } from './globa.slides';
import { IUser } from './user';

export interface IAuthSlice extends IGlobaSlides {
  userAuth: IUser | undefined;
}
