import { Outlet, Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux'
const PrivateRoutes = ({ children }) => {
  const isAuthenticated = useSelector((state)=>state.authReducer); // Replace with your authentication logic

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" replace />
  );
};

export default PrivateRoutes;