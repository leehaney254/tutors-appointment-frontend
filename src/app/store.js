import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../features/RegisterSlice';

export default configureStore({
  reducer: {
    register: registerReducer,
  },
});
