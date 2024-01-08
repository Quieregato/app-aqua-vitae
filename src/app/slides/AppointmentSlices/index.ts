import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IAppointmentSlice } from '../interfaces/appointment';
import { thunkFetchGetAppointmentById, thunkFetchGetAppointmentForAll } from './thunk';

const initialState: IAppointmentSlice = {
  appointments: {
    all: undefined,
    unique: undefined,
    me: undefined,
  },
  loading: false,
  isError: false,
  message: undefined,
};

const AppointmentSlice = createSlice({
  initialState,
  name: 'appointment',
  reducers: {
    setAppointment: (state: IAppointmentSlice, { payload: { id } }) => {
      state.appointments.me =
        state.appointments.all &&
        state.appointments.all.filter((appointment) => appointment.user.id === id)[0];
      
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IAppointmentSlice>) => {
    builder.addCase(
      thunkFetchGetAppointmentById.fulfilled,
      (state: IAppointmentSlice, { payload }) => {
        state.appointments.unique = payload;
        state.loading = false;
        state.isError = false;
        state.message = 'Request Success';
      }
    );

    builder.addCase(thunkFetchGetAppointmentById.pending, (state: IAppointmentSlice) => {
      state.loading = true;
    });

    builder.addCase(
      thunkFetchGetAppointmentById.rejected,
      (state: IAppointmentSlice, { payload }) => {
        state.loading = false;
        state.isError = true;
        state.message = payload as string;
      }
    );

    builder.addCase(
      thunkFetchGetAppointmentForAll.fulfilled,
      (state: IAppointmentSlice, { payload }) => {
        state.appointments.all = payload['data'];
        state.loading = false;
        state.isError = false;
        state.message = 'Request Success';
      }
    );

    builder.addCase(thunkFetchGetAppointmentForAll.pending, (state: IAppointmentSlice) => {
      state.loading = true;
    });

    builder.addCase(
      thunkFetchGetAppointmentForAll.rejected,
      (state: IAppointmentSlice, { payload }) => {
        state.loading = false;
        state.isError = true;
        state.message = payload as string;
      }
    );
  },
});

export const { setAppointment } = AppointmentSlice.actions;

export default AppointmentSlice.reducer;
