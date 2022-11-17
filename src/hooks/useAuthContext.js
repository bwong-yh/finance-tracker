import { useContext } from 'react';

// context
import { AuthContext } from '../context/AuthContext';

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error('useAuthContext must be inside the AuthContextProvider ');

  return context;
};

export default useAuthContext;
