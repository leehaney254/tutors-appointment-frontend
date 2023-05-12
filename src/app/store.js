import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../features/RegisterSlice';
import loginReducer from '../features/LoginSlice';

export default configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
  },
});
