/* eslint-disable no-unused-vars */
// components/ProtectedRoute/ProtectedRoute.jsx
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import api from '@/api'; // your src/api.js which has baseURL `${BASE_URL}/api`
import Cookies from 'js-cookie';
import api from '@/api/api';
import { useDispatch } from 'react-redux';
import { addUser } from '@/features/userDetail/userDetailsSlice';

const ProtectedRoute = ({ children }) => {
  const [checking, setChecking] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;

    const validate = async () => {
      try {
        // Request to /api/auth/me (server will check cookie token + DB)
        const res = await api.get('/auth/me', { withCredentials: true });
        if (!mounted) return;
        if (res.status === 200 && res.data.user) {
          // Keep user info locally if you want
          // localStorage.setItem('user-info', JSON.stringify({ ...res.data.user, token: Cookies.get('token') || null }));

          dispatch(addUser({
            fullName: res.data.user.fullName,
            username: res.data.user.username,
            email: res.data.user.email,
            id: res.data.user._id, // Use _id from the server response
            profilePic: res.data.user.profilePicture, // Use correct key from server
          }));

          setAllowed(true);
        } else {
          // treat as unauthenticated
          // localStorage.removeItem('user-info');
          Cookies.remove('token');
          setAllowed(false);
        }
      } catch (err) {
        // 401/expired or user deleted -> clear and redirect to login
        // localStorage.removeItem('user-info');
        Cookies.remove('token');
        setAllowed(false);
      } finally {
        if (mounted) setChecking(false);
      }
    };

    validate();

    return () => { mounted = false; };
  }, [location.pathname]);

  if (checking) {
    // show a loader while validating
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!allowed) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;



















// /* eslint-disable react/prop-types */
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   // Retrieve the stored user information from localStorage
//   const storedData = localStorage.getItem('user-info');
//   // Parse the data to extract the token (if it exists)
//   const token = storedData ? JSON.parse(storedData).token : null;

//   // If a token exists, render the children (protected content)
//   if (token) {
//     return children;
//   }

//   // Otherwise, redirect to the login page
//   return <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;