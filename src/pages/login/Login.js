import { useState } from 'react';
import './Login.css';

// hookk
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isPending, login } = useLogin();

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    login(email, password);

    reset();
  };

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          type='email'
          onChange={e => setEmail(e.target.value)}
          value={email}
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

      {!isPending && <button className='btn'>Login</button>}
      {isPending && (
        <button className='btn' disabled>
          Logging in
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
