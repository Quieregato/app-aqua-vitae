import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IAuthSlice } from '../interfaces/auth';
import { thunkFetchLogin } from './thunk';

const initialState: IAuthSlice = {
  isError: false,
  loading: false,
  message: undefined,
  userAuth: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IAuthSlice>) => {
    builder.addCase(thunkFetchLogin.fulfilled, (state: IAuthSlice, { payload }) => {
      state.userAuth = payload.user;
      state.loading = false;
      state.isError = false;
      state.message = 'Request Success';
    });
    builder.addCase(thunkFetchLogin.pending, (state: IAuthSlice) => {
      state.loading = true;
    });
    builder.addCase(thunkFetchLogin.rejected, (state: IAuthSlice, { payload }) => {
      state.loading = false;
      state.isError = true;
      state.message = payload as string;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
