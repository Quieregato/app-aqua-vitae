import { createAsyncThunk } from '@reduxjs/toolkit';
import storage from '../../services/data/storage';

export const thunkFetchGetAnthropemetricsForMe = createAsyncThunk(
  'anthropometrics/me',
  async (_, { rejectWithValue }) => {
    try {
      const token = await storage.getData('token');
      const data = await fetch('http://aquaevitae1.ipb.pt:8080/anthropometric-data/me/get', {
        method: 'GET',
        headers: {
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

export const thunkFetchGetAnthropemetricsForAll = createAsyncThunk(
  'anthropometrics/forAll',
  async (_, { rejectWithValue }) => {
    try {
      const token = await storage.getData('token');
      const data = await fetch('http://aquaevitae1.ipb.pt:8080/anthropometric-data/get', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }).then((re) => re.json());

      return data['data'];
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const thunkFetchGetAnthropemetricsById = createAsyncThunk(
  'anthropometrics/byId',
  async (id: string, { rejectWithValue }) => {
    try {
      const token = await storage.getData('token');
      const data = await fetch(`http://aquaevitae1.ipb.pt:8080/anthropometric-data/get/${id}`, {
        method: 'GET',
        headers: {
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
