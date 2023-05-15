import * as JWT from 'jwt-decode';

const ValidateToken = (token) => {
  try {
    const decoded = JWT(token);
    const currentTime = Date.now() / 20000;
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
