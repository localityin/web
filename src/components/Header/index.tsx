import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header">
      <NavLink to="/" className="logo">
        locality
      </NavLink>
      <nav className={`nav ${isOpen ? 'show' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/privacy"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              privacy policy.
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              about
            </NavLink>
          </li> */}
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Header;
