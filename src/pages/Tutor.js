import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTutor } from '../features/SingleTutorSlice';

const Tutor = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tutor = useSelector((state) => state.singleTutor.tutor);
  const loading = useSelector((state) => state.singleTutor.loading);

  useEffect(() => {
    dispatch(getTutor(id));
  }, [dispatch, id]);

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md p-4 space-y-4">
        <h1 className="text-center text-2xl font-bold">Tutor Details</h1>
        <div className="flex items-center space-x-4">
          <div className="w-[300px] h-[300px]">
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-green-600 font-bold text-lg capitalize">
              {tutor.name}
            </p>
            <p className="text-slate-600 font-medium text-base">
              Speciality:
              {' '}
              {tutor.speciality}
            </p>
            <p className="text-slate-600 font-medium text-base">
              Bio:
              {' '}
              {tutor.bio}
            </p>
            <p className="text-green-700 font-bold text-base">
              Price:
              {' '}
              {tutor.price}
            </p>
            <button
              type="button"
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md text-lg"
            >
              Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutor;
