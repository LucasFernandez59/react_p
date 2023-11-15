import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  return (
    <Navbar className="navbar"
      links={[
        <Link key={1} className="nav-link nav-link-custom cool-text" to="/">
          About
        </Link>,
        <Link key={2} className="nav-link cool-text" to="/contact">
          Contact
        </Link>,
        <Link key={3} className='nav-link cool-text' to='/portfolio'>
          Portfolio  
        </Link>,
        <Link key={4} className='nav-link cool-text' to='/resume'>
          Resume
        </Link>
      ]}
    />
  );
}
