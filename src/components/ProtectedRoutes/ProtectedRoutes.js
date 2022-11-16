import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ user }) => {
  // pass does prop in using context={} for outlet
  return user ? <Outlet context={user} /> : <Navigate to='/login' />;
};

export default ProtectedRoutes;
