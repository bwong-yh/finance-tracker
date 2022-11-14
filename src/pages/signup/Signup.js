import { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
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
      <button className='btn'>Sign Up</button>
    </form>
  );
};

export default Signup;
