import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// firebase
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

// context
import useAuthContext from './useAuthContext';

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      // create user with firebase
      const res = await signInWithEmailAndPassword(auth, email, password);

      if (!res) throw new Error('Unable to log in.');

      // firebase automatically logs in user in the backend
      // need to update the frontend
      dispatch({ type: 'LOGIN', payload: res.user });

      setIsPending(false);
      navigate('/');
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, login };
};

export default useLogin;
