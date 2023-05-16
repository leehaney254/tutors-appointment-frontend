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

export const reservedTutors = createAsyncThunk(
  'reserved/reservedTutors',
  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(`${Url}api/v1/reservations?user_id=${id}`, config);
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
    [reservedTutors.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [reservedTutors.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
      error: null,
    }),
    [reservedTutors.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
  },
});

export default reservedTutorSlice.reducer;
