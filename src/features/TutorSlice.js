import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Url from '../api/Url';

const initialState = {
  loading: true,
  data: [],
  message: '',
  error: null,
  tutor: {},
};

const token = localStorage.getItem('token');

export const createTutor = createAsyncThunk(
  'Tutor/createTutor',
  async (tutor, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(`${Url}api/v1/tutors`, tutor, config);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTutors = createAsyncThunk(
  'Tutor/getTutors',
  async (tutor, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(`${Url}api/v1/tutors`, config);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteTutor = createAsyncThunk(
  'Tutor/getTutor',
  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.delete(`${Url}api/v1/tutors/${id}`, config);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const tutorSlice = createSlice({
  name: 'tutor',
  initialState,
  reducers: {},
  extraReducers: {
    [createTutor.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [createTutor.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      message: action.payload.message,
      error: null,
    }),
    [createTutor.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
    [getTutors.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [getTutors.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
      error: null,
    }),
    [getTutors.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
    [deleteTutor.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [deleteTutor.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      message: action.payload.message,
      error: null,
    }),
    [deleteTutor.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
  },
});

export default tutorSlice.reducer;
