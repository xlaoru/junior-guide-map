import React from 'react';
import './Footer.css'

import jgm_logo from '../../images/jgm-logo.png'

const Footer = ({activeLanguage}) => {
    return (
        <div className='Footer'>
            <img src={jgm_logo}/> 
            <h1>{activeLanguage === 0 ? 'Thanks for watching!' : 'Дякую за перегляд!'}</h1>
        </div>
    );
};

export default Footer;