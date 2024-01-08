import { createAsyncThunk } from '@reduxjs/toolkit';
import storage from '../../services/data/storage';

interface IRequestDataForm {
  formData: FormData;
}

export const thunkFetchLogin = createAsyncThunk(
  'auth/login',
  async ({ formData }: IRequestDataForm, { rejectWithValue }) => {
    try {
      const data = await fetch('http://aquaevitae1.ipb.pt:8080/login', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          // Accept: 'application/json',
        },
      })
        .then((response) => response.json())
        .catch((error) => error);
      if (data) {
        await storage.setData('token', data.access_token);
        await storage.setData('id', data.user.id);
      }
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

export const thunkFetchMe = createAsyncThunk('auth/me', async (_, { rejectWithValue }) => {
  try {
    const token = await storage.getData('token');

    const data = await fetch('http://aquaevitae1.ipb.pt:8080/me', {
      method: 'POST',
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
});
