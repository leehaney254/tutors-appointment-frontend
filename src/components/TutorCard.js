import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { reserveTutor } from '../features/ReservationSlice';

const TutorCard = ({
  name, speciality, price, image, bio, id,
}) => {
  const newDate = new Date().toISOString().split('T')[0];
  const user = localStorage.getItem('userId');
  const dispatch = useDispatch();
  const fData = {
    tutor_id: id,
    user_id: user,
    date: newDate,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reserveTutor(fData));
    toast.success('reserved successfully');
  };
  return (
    <div className="flex md:flex-row justify-around flex-col items-center gap-10 w-full drop-shadow-full mx-4 my-4">
      <div className="md:w-full md:h-full sm:h-full sm:w-full lg:h-[300px] lg:w-[300px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="mb-3 w-full md:w-1/2  flex-col flex gap-3">
        <div>
          <p className="text-green-600 font-bold text-lg capitalize">
            {name}
          </p>
          <p className="text-slate-600 font-medium text-base">
            Speciality:
            {' '}
            {speciality}
          </p>
          <p className="text-slate-600 font-medium text-base">
            Bio:
            {' '}
            {bio}
          </p>
          <p className="text-green-700 font-bold text-base">
            Price:
            {' '}
            {price}
          </p>
        </div>
        <div className="align-bottom sm:w-full ">
          <button
            onClick={handleSubmit}
            type="button"
            className="mt-4 bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-md text-lg"
          >
            Reservation
          </button>
        </div>
      </div>
    </div>
  );
};
export default TutorCard;
