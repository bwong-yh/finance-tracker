import { useState } from 'react';

// firebase
import { signOut } from 'firebase/auth';

// hooks
import useAuthContext from './useAuthContextß';

const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await signOut();

      dispatch({ type: 'LOGOUT' });

      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, logout };
};

export default useLogout;
