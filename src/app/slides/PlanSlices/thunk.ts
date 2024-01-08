import { createAsyncThunk } from '@reduxjs/toolkit';
import storage from '../../services/data/storage';

export const thunkFetchGetPlanRecomendationById = createAsyncThunk(
  'planRecomendation/byId',
  async ({ idUser, idNutritionist }: any, { rejectWithValue }) => {
    try {
      const token = await storage.getData('token');
      const data = await fetch(
        `http://aquaevitae1.ipb.pt:8080/recommendation-system/food-preferences?nutritional_plan_id=${idNutritionist}&user_id=${idUser}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'multipart/form-data',
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
