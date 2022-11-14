import { NavLink } from 'react-router-dom';
import './Navbar.css';

// hooks
import useLogout from '../../hooks/useLogout';

const Navbar = () => {
  const { logout } = useLogout();

  return (
    <nav className='navbar'>
      <ul>
        <li className='title'>MoneyPath</li>
        <li>
          <NavLink to='/login'>Log in</NavLink>
        </li>
        <li>
          <NavLink to='/signup'>Sign up</NavLink>
        </li>
        <li>
          <button className='btn' onClick={logout}>
            Log out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
