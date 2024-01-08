import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { ITypeOfMealSlice } from '../interfaces/typeofmeal';
import { thunkFetchGetTypeOfMealByAll } from './thunk';

const initialState: ITypeOfMealSlice = {
  typesOfMeals: undefined,
  loading: false,
  isError: false,
  message: undefined,
};

const TypeOfMealSlice = createSlice({
  initialState,
  name: 'typeOfMeal',
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<ITypeOfMealSlice>) => {
    builder.addCase(
      thunkFetchGetTypeOfMealByAll.fulfilled,
      (state: ITypeOfMealSlice, { payload }) => {
        state.typesOfMeals = payload['data'];
        state.loading = false;
        state.isError = false;
        state.message = 'Request Success';
      }
    );

    builder.addCase(thunkFetchGetTypeOfMealByAll.pending, (state: ITypeOfMealSlice) => {
      state.loading = true;
    });

    builder.addCase(
      thunkFetchGetTypeOfMealByAll.rejected,
      (state: ITypeOfMealSlice, { payload }) => {
        state.loading = false;
        state.isError = true;
        state.message = payload as string;
      }
    );
  },
});

export const {} = TypeOfMealSlice.actions;

export default TypeOfMealSlice.reducer;
