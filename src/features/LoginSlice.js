import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Url from '../api/Url';

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (user, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(`${Url}api/v1/login`, user, config);
      const { token, id, name, role } = data;
      localStorage.setItem('token', token);
      localStorage.setItem('userId', id);
      localStorage.setItem('name', name);
      localStorage.setItem('role', role);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  loading: false,
  isLogin: false,
  loginUser: [],
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [loginUser.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      isLogin: true,
      loginUser: action.payload,
      error: null,
    }),
    [loginUser.rejected]: (state, action) => ({
      ...state,
      loading: false,
      isLogin: false,
      loginUser: {},
      error: action.payload.error,
    }),
  },
});

export const { fetchUser } = loginSlice.actions;
export default loginSlice.reducer;
