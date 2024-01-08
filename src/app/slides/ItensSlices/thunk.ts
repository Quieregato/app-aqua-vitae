import { createAsyncThunk } from '@reduxjs/toolkit';
import storage from '../../services/data/storage';

interface IParamsRequest {
  columns?: string;
  take?: number;
  skip?: number;
  id?: string;
}

export const thunkFetchGetItensByAll = createAsyncThunk(
  'items/byAll',
  async ({ columns, skip, take }: IParamsRequest, { rejectWithValue }) => {
    try {
      const token = await storage.getData('token');
      const data = await fetch(
        `http://aquaevitae1.ipb.pt:8080/item/get?skip=${skip}&take=${take}&columns=${columns}`,
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

export const thunkFetchGetItensById = createAsyncThunk(
  'items/byId',
  async ({ id }: IParamsRequest, { rejectWithValue }) => {
    try {
      const token = await storage.getData('token');
      const data = await fetch(`http://aquaevitae1.ipb.pt:8080/item/get/${id}`, {
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
