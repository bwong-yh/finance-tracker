import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// firebase
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

// context
import useAuthContext from './useAuthContext';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // create user with firebase
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        displayName
      );

      if (!res) throw new Error('Unable to sign up.');

      // display name is set up AFTER user is set up
      await updateProfile(res.user, { displayName });

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

  return { error, isPending, signup };
};

export default useSignup;
