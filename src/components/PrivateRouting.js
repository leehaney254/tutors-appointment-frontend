import { Navigate } from 'react-router-dom';

const PrivateRouting = ({ children }) => {
  const token = window.localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRouting;
