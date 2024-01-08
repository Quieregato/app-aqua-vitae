import { createAsyncThunk } from '@reduxjs/toolkit';
import storage from '../../services/data/storage';

interface IPayload {
  skip?: number;
  take?: number;
  search?: string;
  sort?: string[];
  columns?: string;
  search_all?: string;
}

export const thunkFetchGetNutritionalPlan = createAsyncThunk(
  'nutritionalPlan/me',
  async ({ columns, search, search_all, skip, sort, take }: IPayload, { rejectWithValue }) => {
    try {
      const token = await storage.getData('token');
      let skip_t = skip || 1;
      let take_t = take || 1;
      const data = await fetch(
        `http://aquaevitae1.ipb.pt:8080/nutritional-plan/get?skip=${skip_t}&take=${take_t}&columns=${columns}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((re) => re.json());

      return data;
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const thunkFetchGetNutritionalPlanByUser = createAsyncThunk(
  'nutritionalPlanByUser/me',
  async ({ skip, search, take, columns }: IPayload, { rejectWithValue }) => {
    try {
      const token = await storage.getData('token');
      let skip_t = skip || 1;
      let take_t = take || 1;
      const data = await fetch(
        `http://aquaevitae1.ipb.pt:8080/nutritional-plan/get?skip=${skip_t}&take=${take_t}&search=user_id%3A${search}&columns=${columns}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((re) => re.json());

      return data;
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const thunkFetchGetNutritionalHasPlanByNutritionalPlanId = createAsyncThunk(
  'nutritionalPlanHasMeal/byNutritionalId',
  async ({ skip, search, take }: IPayload, { rejectWithValue }) => {
    try {
      const token = await storage.getData('token');
      let skip_t = skip || 1;
      let take_t = take || 1;
      // get?skip=1&take=50&search=nutritional_plan_id%3Ab035da10-6f59-4e47-b140-e2971f466389
      const data = await fetch(
        `http://aquaevitae1.ipb.pt:8080/nutritional-plan-has-meal/get?skip=${skip_t}&take=${take_t}&search=nutritional_plan_id%3A${search}&columns=meals_of_plan`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((re) => re.json());

      return data;
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const thunkFetchGetMealOfPlanAll = createAsyncThunk(
  'nutritionalPlanHasMeal/mealOfPlanAll',
  async ({ skip, search, take }: IPayload, { rejectWithValue }) => {
    try {
      const token = await storage.getData('token');
      let skip_t = skip || 1;
      let take_t = take || 10;
      // get?skip=1&take=50&search=nutritional_plan_id%3Ab035da10-6f59-4e47-b140-e2971f466389
      const data = await fetch(
        `http://aquaevitae1.ipb.pt:8080/meals-options/get?skip=${skip_t}&take=${take_t}&search=nutritional_plan_has_meal_id%3A${search}&columns=nutritional_plan_has_meal&columns=item`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((re) => re.json());

      return data;
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);
