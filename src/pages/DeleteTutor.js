import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTutors, deleteTutor } from '../features/TutorSlice';
import Loader from '../components/Loader';

const DeleteTutor = () => {
  const dispatch = useDispatch();
  const [tutors, setTutors] = useState([]);
  const load = useSelector((state) => state.tutor);
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
      {
     load.loading ? <div className="flex justify-center min-h-[60vh] items-center"><Loader /></div>
       : (
         <div>
           <h1 className="text-center text-green-600 font-bold capitalize font-sans text-base md:text-2xl mb-3">
             Delete Tutor
           </h1>
           <hr className="border-2 w-25 bg-green-200" />
           <div className="flex gap-4 mt-4 md:flex-row flex- overflow-auto drop-shadow-lg hover:drop-shadow-full shadow-lg my-scroll">
             {tutors.map((tutor) => (
               <div key={tutor.id} className="mt-2 mx-auto mb-2 flex-col justify-center items-center">
                 <div className="h-52 w-56 md:h-48 md:w-52 mb-6 flex justify-center scale-90">
                   <img
                     src={tutor.image}
                     alt=""
                     className="rounded-lg w-full h-full "
                   />
                 </div>
                 <div className="mt-2 mb-2 flex justify-between items-center">
                   <h2 className="text-base mx-2 font-bold">{tutor.name}</h2>
                   <button
                     className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
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
       )
      }
    </div>
  );
};

export default DeleteTutor;
