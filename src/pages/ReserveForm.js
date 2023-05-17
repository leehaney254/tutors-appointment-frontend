import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { reserveTutor } from '../features/ReservationSlice';

const ReserveForm = () => {
  const tutors = useSelector((state) => state.tutor.data);
  const username = window.localStorage.getItem('name');
  const userId = window.localStorage.getItem('userId');
  const [data, setData] = useState({
    tutor_id: '',
    date: '',
  });
  const dispatch = useDispatch();
  const [user_id, setUname] = useState(userId);
  const { date, tutor_id } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const fData = { tutor_id, user_id, date };
    dispatch(reserveTutor(fData));
    toast.success('Tutor reserved Successfully');
    setData(
      {
        tutor_id: '',
        date: '',
      },
    );
    setUname('');
  };
  const newDate = new Date().toISOString().split('T')[0];
  return (
    <div>
      <h2 className="text-center">Reserve Tutor</h2>
      <hr className="border-2 w-full mb-3" />
      <form onSubmit={handleSubmit} className="scale-x-75 ">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tutor Name
          </label>
          <select name="tutor_id" onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light">
            <option value="1">Select Tutor</option>
            {
          tutors.map((val) => (
            <option key={val.id} value={val.id}>{val.name}</option>
          ))
         }
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            readOnly
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Booking Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            min={newDate}
            onChange={handleChange}
            value={date}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};
export default ReserveForm;
