import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData as fetchDataFromAPI } from '../../services/api';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetchDataFromAPI();
  return response;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;

export const selectItems = (state) => state.items;
export const selectStatus = (state) => state.status;
export const selectError = (state) => state.error;

