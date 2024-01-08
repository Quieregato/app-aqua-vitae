import { createAsyncThunk } from '@reduxjs/toolkit';
import storage from '../../services/data/storage';

export const thunkFetchGetTypeOfMealByAll = createAsyncThunk(
  'typeOfMeal/byAll',
  async (_, { rejectWithValue }) => {
    try {
      const token = await storage.getData('token');
      const data = await fetch(`http://aquaevitae1.ipb.pt:8080/type-of-meal/get`, {
        method: 'GET',
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }).then((re) => re.json());

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
