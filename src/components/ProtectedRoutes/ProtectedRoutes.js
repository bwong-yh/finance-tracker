import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ user }) => {
  // pass does prop in using context={} for outlet
  return user ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoutes;
