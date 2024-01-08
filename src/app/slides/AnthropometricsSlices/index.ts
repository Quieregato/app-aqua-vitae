import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IAnthropometricsSlice } from '../interfaces/anthropometrics';
import { thunkFetchGetAnthropemetricsById, thunkFetchGetAnthropemetricsForAll, thunkFetchGetAnthropemetricsForMe } from './thunk';

const initialState: IAnthropometricsSlice = {
  anthropometrics: { all: undefined, unique: undefined, me: undefined },
  loading: false,
  isError: false,
  message: undefined,
};

const AnthropometricsSlice = createSlice({
  initialState,
  name: 'anthropometrics',
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IAnthropometricsSlice>) => {
    builder.addCase(
      thunkFetchGetAnthropemetricsForMe.fulfilled,
      (state: IAnthropometricsSlice, { payload }) => {
        state.anthropometrics.me = payload;
        state.loading = false;
        state.isError = false;
        state.message = 'Request Success';
      }
    );
    builder.addCase(thunkFetchGetAnthropemetricsForMe.pending, (state: IAnthropometricsSlice) => {
      state.loading = true;
    });
    builder.addCase(
      thunkFetchGetAnthropemetricsForMe.rejected,
      (state: IAnthropometricsSlice, { payload }) => {
        state.loading = false;
        state.isError = true;
        state.message = payload as string;
      }
    );

    builder.addCase(
      thunkFetchGetAnthropemetricsForAll.fulfilled,
      (state: IAnthropometricsSlice, { payload }) => {
        state.anthropometrics.all = payload;
        state.loading = false;
        state.isError = false;
        state.message = 'Request Success';
      }
    );
    builder.addCase(thunkFetchGetAnthropemetricsForAll.pending, (state: IAnthropometricsSlice) => {
      state.loading = true;
    });
    builder.addCase(
      thunkFetchGetAnthropemetricsForAll.rejected,
      (state: IAnthropometricsSlice, { payload }) => {
        state.loading = false;
        state.isError = true;
        state.message = payload as string;
      }
    );

    builder.addCase(
      thunkFetchGetAnthropemetricsById.fulfilled,
      (state: IAnthropometricsSlice, { payload }) => {
        state.anthropometrics.unique = payload;
        state.loading = false;
        state.isError = false;
        state.message = 'Request Success';
      }
    );
    builder.addCase(thunkFetchGetAnthropemetricsById.pending, (state: IAnthropometricsSlice) => {
      state.loading = true;
    });
    builder.addCase(
      thunkFetchGetAnthropemetricsById.rejected,
      (state: IAnthropometricsSlice, { payload }) => {
        state.loading = false;
        state.isError = true;
        state.message = payload as string;
      }
    );
  },
});

export const {} = AnthropometricsSlice.actions;

export default AnthropometricsSlice.reducer;
