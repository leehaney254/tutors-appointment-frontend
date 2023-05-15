import { Navigate } from 'react-router-dom';
// import ValidateToken from './ValidateToken';

const PrivateRouting = ({ children }) => {
  const token = window.localStorage.getItem('token');
  // const isValidToken = ValidateToken(token);
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRouting;
