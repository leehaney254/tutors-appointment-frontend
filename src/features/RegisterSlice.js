import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Url from '../api/Url';

export const registerUser = createAsyncThunk(
  'register/registerUser',
  async (user, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(`${Url}api/v1/users`, user, config);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  loading: true,
  isRegistered: false,
  message: null,
  error: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [registerUser.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      isRegistered: true,
      message: action.payload.message,
      error: null,
    }),
    [registerUser.rejected]: (state, action) => ({
      ...state,
      loading: false,
      isRegistered: false,
      message: action.payload.message,
      error: action.payload.error,
    }),
  },
});

export default registerSlice.reducer;
