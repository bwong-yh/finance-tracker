import './Login.css';

const Login = () => {
  return (
    <form className='login-form'>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input type='email' name='' id='' />
      </label>
      <label>
        <span>Password:</span>
        <input type='password' name='' id='' />
      </label>
      <button className='btn'>Login</button>
    </form>
  );
};

export default Login;
