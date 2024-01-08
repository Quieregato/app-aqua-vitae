import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IFoodSlice } from '../interfaces/food';
import { thunkFetchGetFoodByAll, thunkFetchGetFoodById } from './thunk';

const initialState: IFoodSlice = {
  foods: undefined,
  foodsResolved: [],
  loading: false,
  isError: false,
  message: undefined,
};

const FoodSlice = createSlice({
  initialState,
  name: 'Food',
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IFoodSlice>) => {
    builder.addCase(thunkFetchGetFoodByAll.fulfilled, (state: IFoodSlice, { payload }) => {
      state.foods = payload['data'];
      state.loading = false;
      state.isError = false;
      state.message = 'Request Success';
    });

    builder.addCase(thunkFetchGetFoodByAll.pending, (state: IFoodSlice) => {
      state.loading = true;
    });

    builder.addCase(thunkFetchGetFoodByAll.rejected, (state: IFoodSlice, { payload }) => {
      state.loading = false;
      state.isError = true;
      state.message = payload as string;
    });
    builder.addCase(thunkFetchGetFoodById.fulfilled, (state: IFoodSlice, { payload }) => {
      state.foodsResolved = [payload, ...state.foodsResolved];
      state.loading = false;
      state.isError = false;
      state.message = 'Request Success';
    });

    builder.addCase(thunkFetchGetFoodById.pending, (state: IFoodSlice) => {
      state.loading = true;
    });

    builder.addCase(thunkFetchGetFoodById.rejected, (state: IFoodSlice, { payload }) => {
      state.loading = false;
      state.isError = true;
      state.message = payload as string;
    });
  },
});

export const {} = FoodSlice.actions;

export default FoodSlice.reducer;
