import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

interface NavBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ isOpen, setIsOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`nav ${isOpen ? 'open' : 'collapsed'}`} id="navbar">
      <div className="nav__header">
      </div>
      <nav className="nav__container">
        <div>
          <div className="nav__list">
            <div className="nav__items">
                <a href="#" className="nav__logo">
                    <i className="bx bx-leaf nav__icon"></i>
                    {isOpen && <span className="nav__logo-name">Agronomi</span>}
                </a>
              {/* Dropdown for Preparación */}
              <div className="nav__dropdown">
                <button className="nav__link" onClick={toggleDropdown}>
                  <i className="bx bx-landscape nav__icon"></i>
                  {isOpen && <span className="nav__name">Preparación</span>}
                  {isOpen && (
                    <i
                      className={`bx ${
                        isDropdownOpen ? 'bx-chevron-up' : 'bx-chevron-down'
                      } nav__dropdown-icon`}
                    ></i>
                  )}
                </button>
                {isOpen && isDropdownOpen && (
                  <div className="nav__dropdown-menu">
                    <Link to="/seleccion" className="nav__dropdown-item">
                      Selección
                    </Link>
                    <Link to="/labranza" className="nav__dropdown-item">
                      Labranza
                    </Link>
                    <Link to="/tratamiento" className="nav__dropdown-item">
                      Tratamiento
                    </Link>
                  </div>
                )}
              </div>
              {/* Other links */}
              <a href="#" className="nav__link">
                <i className="bx bx-sun nav__icon"></i>
                <Link to="/siembra"> {isOpen && <span className="nav__name">Siembra</span> } </Link>
              </a>
            </div>
            <div className="nav__items">
              <a href="#" className="nav__link">
                <i className="bx bx-donate-heart nav__icon"></i>
                {isOpen && <span className="nav__name">Mantenimiento</span>}
              </a>
              <a href="#" className="nav__link">
                <i className="bx bx-spa nav__icon"></i>
                <Link to="/cosecha"> {isOpen && <span className="nav__name">Cosecha</span> } </Link>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <button className="nav__toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <i className="bx bx-chevron-left"></i> : <i className="bx bx-chevron-right"></i>}
      </button>
      <div className="nav__footer">
        <a href="#" className="nav__link">
          <i className="bx bx-log-out nav__icon"></i>
          {isOpen && <span className="nav__name">Cerrar sesión</span>}
        </a>
      </div>
    </div>
  );
};

export default NavBar;
