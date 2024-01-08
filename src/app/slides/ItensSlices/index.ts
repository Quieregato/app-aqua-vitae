import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IItensSlice } from '../interfaces/itens';
import { thunkFetchGetItensByAll, thunkFetchGetItensById } from './thunk';

const initialState: IItensSlice = {
  items: undefined,
  itemsList: undefined,
  loading: false,
  isError: false,
  message: undefined,
};

const ItensSlice = createSlice({
  initialState,
  name: 'itens',
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IItensSlice>) => {
    builder.addCase(thunkFetchGetItensByAll.fulfilled, (state: IItensSlice, { payload }) => {
      state.itemsList = payload['data'];
      state.loading = false;
      state.isError = false;
      state.message = 'Request Success';
    });

    builder.addCase(thunkFetchGetItensByAll.pending, (state: IItensSlice) => {
      state.loading = true;
    });

    builder.addCase(thunkFetchGetItensByAll.rejected, (state: IItensSlice, { payload }) => {
      state.loading = false;
      state.isError = true;
      state.message = payload as string;
    });

    builder.addCase(thunkFetchGetItensById.fulfilled, (state: IItensSlice, { payload }) => {
      state.items = payload['data'];
      state.loading = false;
      state.isError = false;
      state.message = 'Request Success';
    });

    builder.addCase(thunkFetchGetItensById.pending, (state: IItensSlice) => {
      state.loading = true;
    });

    builder.addCase(thunkFetchGetItensById.rejected, (state: IItensSlice, { payload }) => {
      state.loading = false;
      state.isError = true;
      state.message = payload as string;
    });
  },
});

export const {} = ItensSlice.actions;

export default ItensSlice.reducer;
