import React from 'react';
import './Footer.css'

import jgm_logo from '../../images/jgm-logo.png'

const Footer = ({activeLanguege}) => {
    return (
        <footer className='Footer'>
            <h5>Copyright © 2023. <br/> {activeLanguege === 0 ? 'All rights are reserved' : 'Усі права захищені'}</h5>
            <img src={jgm_logo}/> 
        </footer>
    );
};

export default Footer;