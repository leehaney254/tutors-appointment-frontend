import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReservationCard from '../components/ReservationCard';
import { reservedTutors } from '../features/ReservationSlice';

const Reservation = () => {
  const user_id = localStorage.getItem('userId');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reservedTutors(user_id));
  }, [dispatch, user_id]);

  const ReservationData = useSelector((state) => state.reservedTutor.data);
  return (
    <div className="">
      <h1 className="md:text-3xl text-base font-bold mb-4 text-green-600">
        My Reservation
      </h1>
      <div className="flex md:flex-row flex-col gap-3">
        {ReservationData ? (
          ReservationData.map(({
            id, name, date, image,
          }) => (
            <ReservationCard key={id} name={name} date={date} image={image} />
          ))
        ) : (
          <div>
            <h2>No Reserved Tutor</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservation;
