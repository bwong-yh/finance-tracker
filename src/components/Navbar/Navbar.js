import { NavLink } from 'react-router-dom';
import './Navbar.css';

// hooks
import useLogout from '../../hooks/useLogout';
import useAuthContext from '../../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className='navbar'>
      <ul>
        <li className='title'>MoneyPath</li>

        {!user && (
          <>
            <li>
              <NavLink to='/login'>Log in</NavLink>
            </li>
            <li>
              <NavLink to='/signup'>Sign up</NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>{user.displayName}</li>
            <li>
              <button className='btn' onClick={logout}>
                Log out
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
