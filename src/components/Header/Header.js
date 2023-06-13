import React from 'react';
import { NavLink } from 'react-router-dom'

import './Header.css'

const Header = ({setActivePage, activeLanguage}) => {
    return (
        <div className='Header'>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <div className='main-links'>
                        <li  onClick={() => setActivePage(0)} className="nav-item"><NavLink className="nav-link" to="/">{activeLanguage === 0 ? 'Main' : 'Головна'}</NavLink></li>
                        <li  onClick={() => setActivePage(1)} className="nav-item"><NavLink className="nav-link" to="/aboutus">{activeLanguage === 0 ? 'About Us' : 'Про Нас'}</NavLink></li>
                    </div>
                </ul>
            </nav>
        </div>
        
    );
};

export default Header;