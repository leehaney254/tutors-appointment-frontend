import React from 'react';
import { Link } from 'react-router-dom';

const CardFeature = ({
  name, speciality, price, image, id,
}) => (
  <div className="flex flex-col justify-center  min-h-[260px] min-w-[220px]  p-1 bg-white border border-gray-200 drop-shadow-full hover:shadow-lg rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 scale-100">
    <Link to={`/tutors/${id}`}>
      <div className="h-48 w-[13rem] mb-6 flex justify-center">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <p className=" text-green-600 font-bold text-lg capitalize">{name}</p>
      <p className=" text-slate-600 font-medium text-sm">{speciality}</p>
      <p className=" text-green-700 font-bold text-xs">
        KES
        <span className="text-black">
          {' '}
          {price}
        </span>
      </p>
    </Link>
  </div>
);
export default CardFeature;
