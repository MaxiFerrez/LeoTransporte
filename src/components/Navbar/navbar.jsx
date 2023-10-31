import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpeg';



export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
    return (
      <header>
        <nav className={`navbar ${showMenu ? 'active' : ''}`}>
          <div className="logo">
            <img src={logo} alt="Logo" className="logoImage" />
            <div className="gif-container">
              <img src={require('../../assets/leon.gif')} alt="Logo" className="gif" />
            </div>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`navItems ${showMenu ? 'show' : ''}`}>
            <li><a href="#">Inicio</a></li>
            <li><a href="#Unidades">Unidades</a></li>
            <li><a href="#Destinos">Destinos</a></li>
            <li><a href="#Contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
    );
}
