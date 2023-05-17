import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTutor } from '../features/SingleTutorSlice';
import TutorCard from '../components/TutorCard';
import Loader from '../components/Loader';

const Tutor = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tutor = useSelector((state) => state.singleTutor.tutor);
  const loading = useSelector((state) => state.singleTutor.loading);

  useEffect(() => {
    dispatch(getTutor(id));
  }, [dispatch, id]);

  if (loading) {
    return <div className="flex justify-center min-h-[60vh] items-center"><Loader /></div>;
  }

  return (
    <div className="flex  justify-center items-center">
      <div className="w-full mt-4">
        <h1 className="text-center text-base md:text-2xl font-bold">Tutor Details</h1>
        <TutorCard
          id={tutor.id}
          name={tutor.name}
          image={tutor.image}
          speciality={tutor.speciality}
          bio={tutor.bio}
          price={tutor.price}
        />
      </div>
    </div>
  );
};

export default Tutor;
