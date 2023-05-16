import React from 'react';
import ReservationCard from '../components/ReservationCard';

import ReservationData from '../data/ReservationData';

const Reservation = () => (
  <div className="">
    <h1 className="md:text-3xl text-base font-bold mb-4 text-green-600">My Reservation</h1>
    <div className="flex md:flex-row flex-col gap-3">
      {ReservationData ? ReservationData.map(({
        id, name, date, image,
      }) => <ReservationCard key={id} name={name} date={date} image={image} />)
        : <div><h2>No Reserved Tutor</h2></div>}
    </div>
  </div>
);

export default Reservation;
