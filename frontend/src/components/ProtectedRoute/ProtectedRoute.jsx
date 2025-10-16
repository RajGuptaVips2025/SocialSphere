/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
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
        const res = await api.get('/auth/me', { withCredentials: true });
        if (!mounted) return;
        if (res.status === 200 && res.data.user) {
          dispatch(addUser({
            fullName: res.data.user.fullName,
            username: res.data.user.username,
            email: res.data.user.email,
            id: res.data.user._id, // Use _id from the server response
            profilePic: res.data.user.profilePicture, // Use correct key from server
          }));

          setAllowed(true);
        } else {
          Cookies.remove('token');
          setAllowed(false);
        }
      } catch (err) {
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