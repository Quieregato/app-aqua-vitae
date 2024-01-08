import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IPlanNutritionalSlice } from '../interfaces/planNutritional';
import { thunkFetchGetPlanRecomendationById } from './thunk';

const initialState: IPlanNutritionalSlice = {
  systemRecomendation: undefined,
  loading: false,
  isError: false,
  message: undefined,
};

const PlanRecomendationSlice = createSlice({
  initialState,
  name: 'planRecomendation',
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IPlanNutritionalSlice>) => {
    builder.addCase(
      thunkFetchGetPlanRecomendationById.fulfilled,
      (state: IPlanNutritionalSlice, { payload }) => {
        state.systemRecomendation = payload;
        state.loading = false;
        state.isError = false;
        state.message = 'Request Success';
      }
    );

    builder.addCase(thunkFetchGetPlanRecomendationById.pending, (state: IPlanNutritionalSlice) => {
      state.loading = true;
    });

    builder.addCase(
      thunkFetchGetPlanRecomendationById.rejected,
      (state: IPlanNutritionalSlice, { payload }) => {
        state.loading = false;
        state.isError = true;
        state.message = payload as string;
      }
    );
  },
});

export const {} = PlanRecomendationSlice.actions;

export default PlanRecomendationSlice.reducer;
