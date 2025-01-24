import { Navigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const GuestRoute = ({ children }) => {
  const cookies = new Cookies();
  const token = cookies.get('token'); // Check for the presence of the token cookie.

  return !token ? children : <Navigate to="/" />;
};

export default GuestRoute;