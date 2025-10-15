/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const GuestRoute = ({ children }) => {
  // const cookies = new Cookies();
  // const token = cookies.get('token'); // Check for the presence of the token cookie.
  // const storedData = localStorage.getItem('user-info');
  // const token = storedData ? JSON.parse(storedData).token : null;

  const token = Cookies.get('token');
   // If a token exists (user is likely logged in), redirect to home ('/')
  return !token ? children : <Navigate to="/" />;
  // return !token ? children : <Navigate to="/" />;
};

export default GuestRoute;