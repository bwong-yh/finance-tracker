import { useState } from 'react';
import useSignup from '../../hooks/useSignup';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { error, isPending, signup } = useSignup();

  const reset = () => {
    setEmail('');
    setPassword('');
    setDisplayName('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    signup(email, password, displayName);

    reset();
  };

  return (
    <form className='signup-form' onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>Email:</span>
        <input
          type='email'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          type='text'
          onChange={e => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type='password'
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>

      {!isPending && <button className='btn'>Sign Up</button>}
      {isPending && (
        <button className='btn' disabled>
          Creating
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
