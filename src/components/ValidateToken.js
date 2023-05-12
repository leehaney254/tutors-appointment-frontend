import jwt_decode from 'jwt-decode';

const ValidateToken = (token) => {
  try {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Token has expired
      return false;
    }
    // Token is valid
    return true;
  } catch (error) {
    // Token is invalid
    return false;
  }
};

export default ValidateToken;
