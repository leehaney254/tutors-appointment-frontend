import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Url from '../api/Url';

const initialState = {
  loading: true,
  message: '',
  error: null,
  tutor: {},
};

const token = localStorage.getItem('token');

export const getTutor = createAsyncThunk(
  'Tutor/getTutor',
  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${Url}api/v1/tutors/${parseInt(id)}`,
        config,
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const singleTutorSlice = createSlice({
  name: 'singleTutor',
  initialState,
  reducers: {},
  extraReducers: {
    [getTutor.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [getTutor.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      tutor: action.payload,
      error: null,
    }),
    [getTutor.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
  },
});

export default singleTutorSlice.reducer;
