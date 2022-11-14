import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li className='title'>MoneyPath</li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/signup'>Sign up</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
