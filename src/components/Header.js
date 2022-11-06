import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='Header'>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <div className='main-links'>
                        <li className="nav-item"><NavLink className="nav-link" to="/">Main</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/aboutus">About Us</NavLink></li>
                    </div>
                </ul>
            </nav>
        </div>
        
    );
};

export default Header;