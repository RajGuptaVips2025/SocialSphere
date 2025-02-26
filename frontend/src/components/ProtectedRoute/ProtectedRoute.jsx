import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Retrieve the stored user information from localStorage
  const storedData = localStorage.getItem('user-info');
  // Parse the data to extract the token (if it exists)
  const token = storedData ? JSON.parse(storedData).token : null;

  // If a token exists, render the children (protected content)
  if (token) {
    return children;
  }

  // Otherwise, redirect to the login page
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;













// import { Cookies } from 'react-cookie';
// import { useEffect, useMemo, useState } from 'react';
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   // const cookies = new Cookies();
//   const cookies = useMemo(() => new Cookies(), []);
//   // console.log(cookies);
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     cookies.get('isAuthenticated') || null
//   );

//   // console.log(isAuthenticated);

//   useEffect(() => {
//     const controller = new AbortController();

//     const checkAuth = async () => {
//       try {
//         const res = await axios.get('/api/auth/isLoggedIn', {
//           signal: controller.signal,
//         });
        
//         if (res.status === 200) {
//           setIsAuthenticated(true);
//           cookies.set('isAuthenticated', true, { path: '/' });
//         }
//       } catch (error) {
//         if (error.name !== 'CanceledError') {
//           setIsAuthenticated(false);
//           cookies.set('isAuthenticated', false, { path: '/' });
//           console.log('Error during authentication check:', error.message);
//         }
//       }
//     };

//     if (isAuthenticated === null) {
//       checkAuth();
//     }

//     return () => {
//       controller.abort(); // Cleanup to prevent memory leaks
//     };
//   }, [isAuthenticated, cookies]);

//   // Display spinner while waiting for authentication check
//   if (isAuthenticated === null) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div
//           className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
//           role="status"
//         >
//           <span className="sr-only">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   // Render children if authenticated
//   if (isAuthenticated) {
//     return children;
//   }

//   // Redirect to login if not authenticated
//   return <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;