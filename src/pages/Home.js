import React, { useRef, useEffect } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';
import CardFeature from '../components/CardFeature';
import { getTutors } from '../features/TutorSlice';

const Home = () => {
  const userefTarget = useRef();

  const dispatch = useDispatch();
  const tutors = useSelector((state) => state.tutor.data);

  useEffect(() => {
    dispatch(getTutors());
  }, []);
  const next = () => {
    userefTarget.current.scrollLeft += 240;
  };
  const prev = () => {
    userefTarget.current.scrollLeft -= 240;
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="md:text-3xl text-base font-bold text-green-600">
          Tutors
        </h1>
        <hr className="md:w-28 w-24 md:border-2 border-1 border-green-600" />
      </div>
      <div className=" w-full h-54 items-center relative">
        <button
          className="bg-green-400 hover:bg-green-500 rounded text-lg p-1 absolute z-40 -left-7 top-28"
          type="button"
          onClick={prev}
        >
          <GrPrevious />
        </button>
        <button
          className="bg-green-400 hover:bg-green-500 rounded text-lg p-1 absolute z-40 -right-7 top-28"
          type="button"
          onClick={next}
        >
          <GrNext />
        </button>
      </div>
      <div
        ref={userefTarget}
        className="flex  items-center mx-2 md:scale-90 mt-2 gap-4 overflow-scroll scrollbar-none scroll-smooth scrollbar-hide  transition-all"
      >
        {tutors[0]
          && tutors.map((product) => (
            <CardFeature
              key={product.id}
              id={product.id}
              name={product.name}
              speciality={product.speciality}
              bio={product.bio}
              price={product.price}
              image={product.image}
              className="md:w-1/2"
            />
          ))}
      </div>
    </div>
  );
};
export default Home;
