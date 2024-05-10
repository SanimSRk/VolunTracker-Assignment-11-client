import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';

const useAuth = useContext(AuthContext);
export default useAuth;
