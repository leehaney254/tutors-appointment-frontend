import { useState } from 'react';

const Register = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: '',
  });
  const {
    username, email, password, cpassword,
  } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-green-600 lg:max-w-xl">
        <h3 className="text-2xl font-semibold text-center text-green-500 underline uppercase decoration-wavy">
          Registration form
        </h3>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              name="password"
              value={password}
              onChange={handleChange}
              id="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="cpassword"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <input
              name="cpassword"
              value={cpassword}
              onChange={handleChange}
              id="cpassword"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
