import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Url from '../api/Url';

const initialState = {
  loading: true,
  data: [],
  message: '',
  error: null,
};

const token = localStorage.getItem('token');

export const reserveTutor = createAsyncThunk(
  'reserved/reserveTutor',
  async (tutor, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(`${Url}api/v1/reservations`, tutor, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const reservedTutorSlice = createSlice({
  name: 'reserved',
  initialState,
  reducers: {},
  extraReducers: {
    [reserveTutor.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [reserveTutor.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      message: action.payload,
      error: null,
    }),
    [reserveTutor.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
  },
});

export default reservedTutorSlice.reducer;
