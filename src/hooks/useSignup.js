import { useState } from 'react';

// firebase
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

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

      console.log('res:', res);

      if (!res) throw new Error('Unable to sign up.');

      // display name is set up AFTER user is set up
      await updateProfile(res.user, { displayName });

      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};

export default useSignup;
