import { Navigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const GuestRoute = ({ children }) => {
  // const cookies = new Cookies();
  // const token = cookies.get('token'); // Check for the presence of the token cookie.
  const storedData = localStorage.getItem('user-info');
  const token = storedData ? JSON.parse(storedData).token : null;


  return !token ? children : <Navigate to="/" />;
};

export default GuestRoute;