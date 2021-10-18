import { useContext } from 'react';
import  { AuthContext } from '../ContexAPI/AuthProvider';

const UseAuth = () => {
    return useContext(AuthContext)
};

export default UseAuth;
