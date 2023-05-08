const ReserveForm = () => (
  <form>
    <div className="mb-6">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Tutor Name
      </label>
      <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light">
        <option value="1">Select Tutor</option>
        <option value="2">2</option>
        <option value="3">3</option>
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
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required
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
);
export default ReserveForm;
