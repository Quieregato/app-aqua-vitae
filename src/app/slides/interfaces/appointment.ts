import { IGlobaSlides } from './globa.slides';
import { IUser } from './user';

export interface IAppointmentSlice extends IGlobaSlides {
  appointments: IAppointmentsTypes;
}

export interface IAppointmentsTypes {
  all: IAppointment[] | undefined;
  unique: IAppointment | undefined;
  me: IAppointment | undefined;
}

export interface IAppointment {
  id: string | undefined;
  created_at: string | undefined;
  updated_at: string | undefined;
  deleted_at: string | undefined;
  date: string | undefined;
  status: string | undefined;
  user: IUser;
  nutritionist: IUser;
  appointment_has_goals: IAppointmentEntity[];
}

export interface IAppointmentEntity {
  id: string | undefined;
  created_at: string | undefined;
  deleted_at: string | undefined;
  updated_at: string | undefined;
  description: string | undefined;
}
