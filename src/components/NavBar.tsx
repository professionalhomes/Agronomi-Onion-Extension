import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={`nav ${isOpen ? 'open' : 'collapsed'}`} id="navbar">
            <button className="nav__toggle" onClick={toggleNavBar}>
                {isOpen ? '←' : '→'}
            </button>
            <nav className="nav__container">
                <div>
                    <a href="#" className="nav__link nav__logo">
                        <i className="bx bx-leaf nav__icon"></i>
                        <span className="nav__logo-name">Agronomi</span>
                    </a>
                    <div className="nav__list">
                        <div className="nav__items">
                            {/* Dropdown for Preparación */}
                            <div className="nav__dropdown">
                                <button className="nav__link" onClick={toggleDropdown}>
                                    <i className="bx bx-landscape nav__icon"></i>
                                    <span className="nav__name">Preparación</span>
                                    <i
                                        className={`bx ${
                                            isDropdownOpen ? 'bx-chevron-up' : 'bx-chevron-down'
                                        } nav__dropdown-icon`}
                                    ></i>
                                </button>
                                {isDropdownOpen && (
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
                                <span className="nav__name">Siembra</span>
                            </a>
                        </div>
                        <div className="nav__items">
                            <a href="#" className="nav__link">
                                <i className="bx bx-donate-heart nav__icon"></i>
                                <span className="nav__name">Mantenimiento</span>
                            </a>
                            <a href="#" className="nav__link">
                                <i className="bx bx-spa nav__icon"></i>
                                <span className="nav__name">Cosecha</span>
                            </a>
                        </div>
                        <div className="nav__items">
                            <a href="#" className="nav__link">
                                <i className="bx bx-log-out nav__icon"></i>
                                <span className="nav__name">Cerrar sesión</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
