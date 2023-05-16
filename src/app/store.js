import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../features/RegisterSlice';
import loginReducer from '../features/LoginSlice';
import tutorReducer from '../features/TutorSlice';
import singleTutorReducer from '../features/SingleTutorSlice';
import reservedTutorSlice from '../features/ReservationSlice';

export default configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    tutor: tutorReducer,
    singleTutor: singleTutorReducer,
    reservedTutor: reservedTutorSlice,
  },
});
