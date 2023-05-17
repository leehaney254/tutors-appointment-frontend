import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReservationCard from '../components/ReservationCard';
import { reservedTutors } from '../features/ReservationSlice';
import Loader from '../components/Loader';

const Reservation = () => {
  const user_id = localStorage.getItem('userId');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reservedTutors(user_id));
  }, [dispatch, user_id]);

  const ReservationData = useSelector((state) => state.reservedTutor);
  return (
    <div>
      {
       ReservationData.loading ? <div className="flex justify-center  min-h-[60vh] items-center"><Loader /></div>
         : (
           <div className=" scale-90">
             <h1 className="md:text-3xl text-base font-bold mb-4 text-green-600">My Reservation</h1>
             <div className="flex  gap-3 overflow-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 my-scroll">
               {ReservationData.data[0] ? ReservationData.data.map(({
                 id, name, date, image, price,
               }) => (
                 <ReservationCard
                   key={id}
                   name={name}
                   price={price}
                   date={date}
                   image={image}
                 />
               ))
                 : <div><h2>No Reserved Tutor</h2></div>}
             </div>
           </div>
         )
      }
    </div>
  );
};

export default Reservation;
