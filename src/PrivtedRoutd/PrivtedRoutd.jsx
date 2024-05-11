import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivtedRoutd = ({ children }) => {
  const { user, lodings } = useContext(AuthContext);
  const location = useLocation();
  if (lodings) {
    return 'loding hoytasi.......';
  }
  if (!user) {
    return <Navigate state={location.pathname || '/login'}></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivtedRoutd;
