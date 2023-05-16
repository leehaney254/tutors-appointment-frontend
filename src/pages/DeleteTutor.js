import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTutors, deleteTutor } from '../features/TutorSlice';

const DeleteTutor = () => {
  const dispatch = useDispatch();
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    dispatch(getTutors()).then((response) => {
      setTutors(response.payload);
    });
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTutor(id)).then(() => {
      const updatedTutors = tutors.filter((tutor) => tutor.id !== id);
      setTutors(updatedTutors);
    });
  };

  return (
    <div>
      <h1 className="text-center text-green-600 font-bold text-base md:text-4xl mb-3">
        Delete Tutor
      </h1>
      <div className="flex gap-4 mt-4 md:flex-row flex-col drop-shadow-lg shadow-lg">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="text-center">
            <div className="h-52 w-56 mb-6 flex justify-center ">
              <img
                src={tutor.image}
                alt=""
                className="rounded-lg w-full h-full "
              />
            </div>
            <div className="mt-2 mb-2 flex justify-between items-center">
              <h2 className="text-base mx-2 font-bold">{tutor.name}</h2>
              <button
                className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={() => handleDelete(tutor.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteTutor;
