import getText from '../utils/getText';
import translation from '../assets/translation';

import { NavLink } from 'react-router-dom'

import { IHeaderProps } from '../utils/Interfaces';

function Header({setActivePage}: IHeaderProps) {
    return (
        <div className='Header'>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <div className='main-links'>
                        <li onClick={() => setActivePage(0)} className="nav-item"><NavLink className="nav-link" to="/">{getText(translation.header.mainPage)}</NavLink></li>
                        <li onClick={() => setActivePage(1)} className="nav-item"><NavLink className="nav-link" to="/aboutus">{getText(translation.header.aboutusPage)}</NavLink></li>
                    </div>
                </ul>
            </nav>
        </div>
        
    );
};

export default Header;