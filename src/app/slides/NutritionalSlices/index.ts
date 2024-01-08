import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { INutritionalPlanSlice } from '../interfaces/nutritionalPlan';
import {
  thunkFetchGetNutritionalHasPlanByNutritionalPlanId,
  thunkFetchGetNutritionalPlan,
  thunkFetchGetNutritionalPlanByUser,
} from './thunk';

const initialState: INutritionalPlanSlice = {
  nutritionalPlan: undefined,
  listTemp: [],
  nutritionalPlanHasMeal: undefined,
  nutritionalPlanHasDay: undefined,
  loading: false,
  isError: false,
  message: undefined,
};

const nutritionalSlice = createSlice({
  initialState,
  name: 'nutritionalPlan',
  reducers: {
    setPlanHasDay: (state: INutritionalPlanSlice, { payload }) => {
      state.nutritionalPlanHasDay = payload;
    },
    insertList: (state: INutritionalPlanSlice, { payload }) => {
      state.listTemp.push(payload);
    },
    resetList: (state: INutritionalPlanSlice) => {
      state.listTemp = [];
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<INutritionalPlanSlice>) => {
    builder.addCase(
      thunkFetchGetNutritionalPlan.fulfilled,
      (state: INutritionalPlanSlice, { payload }) => {
        state.nutritionalPlan = payload;
        state.loading = false;
        state.isError = false;
        state.message = 'Request Success';
      }
    );
    builder.addCase(thunkFetchGetNutritionalPlan.pending, (state: INutritionalPlanSlice) => {
      state.loading = true;
    });
    builder.addCase(
      thunkFetchGetNutritionalPlan.rejected,
      (state: INutritionalPlanSlice, { payload }) => {
        state.loading = false;
        state.isError = true;
        state.message = payload as string;
      }
    );
    builder.addCase(
      thunkFetchGetNutritionalPlanByUser.fulfilled,
      (state: INutritionalPlanSlice, { payload }) => {
        state.nutritionalPlan = payload.data;
        state.loading = false;
        state.isError = false;
        state.message = 'Request Success';
      }
    );
    builder.addCase(thunkFetchGetNutritionalPlanByUser.pending, (state: INutritionalPlanSlice) => {
      state.loading = true;
    });
    builder.addCase(
      thunkFetchGetNutritionalPlanByUser.rejected,
      (state: INutritionalPlanSlice, { payload }) => {
        state.loading = false;
        state.isError = true;
        state.message = payload as string;
      }
    );

    builder.addCase(
      thunkFetchGetNutritionalHasPlanByNutritionalPlanId.fulfilled,
      (state: INutritionalPlanSlice, { payload }) => {
        state.nutritionalPlanHasMeal = payload.data;
        state.loading = false;
        state.isError = false;
        state.message = 'Request Success';
      }
    );
    builder.addCase(
      thunkFetchGetNutritionalHasPlanByNutritionalPlanId.pending,
      (state: INutritionalPlanSlice) => {
        state.loading = true;
      }
    );
    builder.addCase(
      thunkFetchGetNutritionalHasPlanByNutritionalPlanId.rejected,
      (state: INutritionalPlanSlice, { payload }) => {
        state.loading = false;
        state.isError = true;
        state.message = payload as string;
      }
    );
  },
});

export const { setPlanHasDay, insertList, resetList } = nutritionalSlice.actions;

export default nutritionalSlice.reducer;
